#!/bin/bash

# Deployment Script for Debian/Ubuntu Server

# Set strict error handling
set -e

echo "=== Starting Deployment ==="

# 1. Update Code
echo "Pulling latest changes from git..."
if [ -d ".git" ]; then
    # Stash any local changes to avoid conflicts
    if [ -n "$(git status --porcelain)" ]; then
        echo "Stashing local changes..."
        git stash
    fi
    
    git pull origin main
else
    echo "Error: Not a git repository."
    exit 1
fi

# 2. Install Dependencies
echo "Installing dependencies..."
npm install --production

# 3. Restart Application
echo "Restarting application..."
./scripts/restart.sh

echo "=== Deployment Complete ==="
echo "Check server.log for application status."
