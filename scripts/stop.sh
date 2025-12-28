#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.."

if [ ! -f server.pid ]; then
    echo "No server.pid file found. Is the server running?"
    exit 1
fi

PID=$(cat server.pid)
if ps -p $PID > /dev/null; then
    echo "Stopping server (PID: $PID)..."
    kill $PID
    rm server.pid
    echo "Server stopped."
else
    echo "Process $PID not found. Cleaning up stale PID file."
    rm server.pid
fi
