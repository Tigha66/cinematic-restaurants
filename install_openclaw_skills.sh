#!/bin/bash
echo "🚀 Installing Top 10 OpenClaw Skills..."

# Ensure OpenClaw CLI is available
if ! command -v openclaw &> /dev/null
then
 echo "❌ OpenClaw CLI not found. Please install it first: npm install -g @openclaw/cli"
 exit
fi

# 1. Awesome OpenClaw Skills Catalog
npx openclaw skill add https://github.com/VoltAgent/awesome-openclaw-skills

# 2. Coding Agent
npx openclaw skill add https://github.com/openclaw/openclaw --skill coding-agent

# 3. GitHub Integration
npx openclaw skill add https://github.com/openclaw/openclaw --skill github

# 4. Session Logs
npx openclaw skill add https://github.com/openclaw/openclaw --skill session-logs

# 5. Skill Scaffold
npx openclaw skill add https://openclawskills.org/skills/nextfrontierbuilds/skill-scaffold

# 6. Agent Mail
npx openclaw skill add https://github.com/openclaw/openclaw --skill agent-mail

# 7. Browser Automation
npx openclaw skill add https://github.com/VoltAgent/awesome-openclaw-skills --skill browser-automation

# 8. Calendar & Planner
npx openclaw skill add https://github.com/openclaw/openclaw --skill calendar-planner

# 9. Communication & Social Plugins
npx openclaw skill add https://github.com/openclaw/openclaw --skill agentmesh

# 10. Content & Writing Assistants
npx openclaw skill add https://github.com/openclaw/openclaw --skill content-assistant

echo "✅ All top 10 OpenClaw skills installed!"
npx openclaw skill list