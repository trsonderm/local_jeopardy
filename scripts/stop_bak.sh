#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.."

PORT=5000

# Function to kill process
kill_process() {
    local pid=$1
    if [ -n "$pid" ]; then
        echo "Stopping process $pid..."
        kill $pid 2>/dev/null
        return $?
    fi
    return 1
}

# 1. Check PID file
if [ -f server.pid ]; then
    PID=$(cat server.pid)
    echo "Found server.pid: $PID"
    if kill_process $PID; then
        echo "Server stopped (PID from file)."
        rm server.pid
        exit 0
    else
        echo "PID $PID from file is not running."
        rm server.pid
    fi
fi

# 2. Try lsof
if command -v lsof >/dev/null; then
    echo "Searching using lsof..."
    PID=$(lsof -t -i:$PORT)
    if [ -n "$PID" ]; then
        if kill_process $PID; then
            echo "Server stopped (PID $PID from lsof)."
            exit 0
        fi
    fi
fi

# 3. Try ss
if command -v ss >/dev/null; then
    echo "Searching using ss..."
    # Parse PID from ss output like: users:(("node",pid=12345,fd=18))
    PID=$(ss -lptn "sport = :$PORT" | grep -o 'pid=[0-9]*' | cut -d= -f2 | head -n 1)
    if [ -n "$PID" ]; then
        if kill_process $PID; then
            echo "Server stopped (PID $PID from ss)."
            exit 0
        fi
    fi
fi

echo "No running server found on port $PORT."
exit 0
