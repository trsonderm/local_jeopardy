#!/bin/bash

DIR="$(dirname "$0")"

echo "Restarting server..."
$DIR/stop.sh
sleep 2
$DIR/start.sh
