#!/bin/bash

# OpenClaw Installation Script
# This script automates the setup and configuration of OpenClaw.

set -e  # Exit on any error

echo "\nStarting OpenClaw Installation...\n"

# Check for dependencies
check_dependency() {
  if ! command -v $1 &> /dev/null; then
    echo "$1 is not installed. Installing..."
    sudo apt-get install -y $1 || sudo yum install -y $1 || brew install $1
  else
    echo "$1 is already installed."
  fi
}

check_dependency "curl"
check_dependency "docker"
check_dependency "docker-compose"
check_dependency "node"

# Clone OpenClaw repository
echo "\nCloning OpenClaw...\n"
git clone https://github.com/openclaw/openclaw.git || { echo "Failed to clone repository" ; exit 1; }
cd openclaw

# Install OpenClaw dependencies
echo "\nInstalling dependencies...\n"
npm install -g pnpm
pnpm install --strict-peer-dependencies false

# Setup OpenClaw workspace
echo "\nConfiguring OpenClaw workspace...\n"
pnpm run bootstrap
export OPENCLAW_HOME=$(pwd)

# Inform user installation is complete
echo "\nOpenClaw installation complete!\n"
echo "Access your OpenClaw dashboard at http://localhost:18789 after running the application."