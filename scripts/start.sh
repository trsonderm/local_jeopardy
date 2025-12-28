#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.."

# Check if already running
if [ -f server.pid ]; then
    PID=$(cat server.pid)
    if ps -p $PID > /dev/null; then
        echo "Server is already running (PID: $PID)"
        exit 1
    else
        echo "Stale PID file found. Removing..."
        rm server.pid
    fi
fi

# Start the server
echo "Starting Jeopardy Server..."
nohup npm start > server.log 2>&1 &
PID=$!
echo $PID > server.pid
echo "Server started with PID: $PID"
echo "Logs available at server.log"
