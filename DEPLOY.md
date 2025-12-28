# Deployment Guide (Debian/Ubuntu)

This guide assumes you are deploying the Local Jeopardy application to a Debian-based Linux server (e.g., Ubuntu, Debian).

## Prerequisites
- **Node.js**: Version 14 or higher.
- **Git**: To fetch the code.
- **SQLite3**: usually installed by `npm install`, but system libraries might be needed.

### Installing Prerequisites
Run the following on your server:

```bash
sudo apt update
sudo apt install -y nodejs npm git build-essential
```

*Note: For a specific Node.js version, consider using [nvm](https://github.com/nvm-sh/nvm).*

## Setup

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url> local-jeopardy
   cd local-jeopardy
   ```

2. **Make Scripts Executable**:
   ```bash
   chmod +x deploy.sh scripts/*.sh
   ```

3. **Initial Install**:
   ```bash
   npm install
   ```

## Managing the Server

We have provided convenience scripts in the `scripts/` folder.

- **Start**: `./scripts/start.sh` (Runs in background, logs to `server.log`)
- **Stop**: `./scripts/stop.sh`
- **Restart**: `./scripts/restart.sh`

## Deploying Updates

To deploy the latest code from your git repository, simply run:

```bash
./deploy.sh
```

This will:
1. `git pull` the latest code.
2. `npm install` any new dependencies.
3. Restart the server cleanly.

## Production Service (Optional)

For a robust production setup, use `systemd` to ensure the app starts on boot.

1. Create a service file: `/etc/systemd/system/jeopardy.service`

```ini
[Unit]
Description=Local Jeopardy Node Server
After=network.target

[Service]
# Replace 'user' with your linux username
User=user
# Replace with absolute path to your project
WorkingDirectory=/home/user/local-jeopardy
ExecStart=/usr/bin/npm start
Restart=always

[Install]
WantedBy=multi-user.target
```

2. Enable and Start:
```bash
sudo systemctl enable jeopardy
sudo systemctl start jeopardy
```
