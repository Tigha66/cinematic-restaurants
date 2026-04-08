@echo off
echo 🚀 Installing OpenClaw Pro 30+ Skills...

:: Check if OpenClaw CLI is installed
where openclaw >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
 echo ❌ OpenClaw CLI not found. Install it first with:
 echo npm install -g @openclaw/cli
 pause
 exit /b
)

:: ===== Core & Productivity =====
npx openclaw skill add https://github.com/VoltAgent/awesome-openclaw-skills
npx openclaw skill add https://github.com/openclaw/openclaw --skill coding-agent
npx openclaw skill add https://github.com/openclaw/openclaw --skill github
npx openclaw skill add https://github.com/openclaw/openclaw --skill session-logs
npx openclaw skill add https://openclawskills.org/skills/nextfrontierbuilds/skill-scaffold
npx openclaw skill add https://github.com/openclaw/openclaw --skill task-planner
npx openclaw skill add https://github.com/openclaw/openclaw --skill calendar-planner
npx openclaw skill add https://github.com/openclaw/openclaw --skill context-manager

:: ===== Memory & AI Utilities =====
npx openclaw skill add https://github.com/openclaw/openclaw --skill long-term-memory
npx openclaw skill add https://github.com/openclaw/openclaw --skill semantic-search
npx openclaw skill add https://github.com/openclaw/openclaw --skill model-manager
npx openclaw skill add https://github.com/openclaw/openclaw --skill knowledge-base-search

:: ===== Data & Analytics =====
npx openclaw skill add https://github.com/openclaw/openclaw --skill spreadsheet-analyzer
npx openclaw skill add https://github.com/openclaw/openclaw --skill data-visualizer
npx openclaw skill add https://github.com/openclaw/openclaw --skill api-data-fetcher
npx openclaw skill add https://github.com/openclaw/openclaw --skill statistical-tools
npx openclaw skill add https://github.com/openclaw/openclaw --skill pdf-extractor
npx openclaw skill add https://github.com/openclaw/openclaw --skill data-cleaner

:: ===== Web, Automation & Research =====
npx openclaw skill add https://github.com/VoltAgent/awesome-openclaw-skills --skill browser-automation
npx openclaw skill add https://github.com/VoltAgent/awesome-openclaw-skills --skill scraper-pro
npx openclaw skill add https://github.com/openclaw/openclaw --skill form-filler
npx openclaw skill add https://github.com/openclaw/openclaw --skill search-enhancer
npx openclaw skill add https://github.com/openclaw/openclaw --skill document-summarizer
npx openclaw skill add https://github.com/openclaw/openclaw --skill citation-finder

:: ===== Communication & Collaboration =====
npx openclaw skill add https://github.com/openclaw/openclaw --skill agentmesh
npx openclaw skill add https://github.com/openclaw/openclaw --skill slack-connector
npx openclaw skill add https://github.com/openclaw/openclaw --skill discord-bot
npx openclaw skill add https://github.com/openclaw/openclaw --skill agent-mail
npx openclaw skill add https://github.com/openclaw/openclaw --skill social-media-plugins

:: ===== Content & Creativity =====
npx openclaw skill add https://github.com/openclaw/openclaw --skill content-generator
npx openclaw skill add https://github.com/openclaw/openclaw --skill summarizer
npx openclaw skill add https://github.com/openclaw/openclaw --skill markdown-builder
npx openclaw skill add https://github.com/openclaw/openclaw --skill translation-assistant
npx openclaw skill add https://github.com/openclaw/openclaw --skill presentation-builder

:: ===== Optional / Advanced =====
npx openclaw skill add https://github.com/openclaw/openclaw --skill workflow-orchestrator
npx openclaw skill add https://github.com/openclaw/openclaw --skill notification-hub
npx openclaw skill add https://github.com/openclaw/openclaw --skill knowledge-compression

echo ✅ All 30+ OpenClaw Pro skills installed!
npx openclaw skill list
pause