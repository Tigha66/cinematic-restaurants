## Setting Up OpenClaw with the Qwen3.5 9B Model on a Mac

### Step 1: Download the Qwen3.5 9B Model
1. Visit [HuggingFace](https://huggingface.co/mlx-community/Qwen3.5-9B-8bit).
2. Choose the appropriate version for your system (e.g., 4-bit for lower memory systems).
3. Download the model to a specific directory, e.g., `/Volumes/WORK_2/models`.

### Step 2: Create and Activate a Python Virtual Environment
1. Create a virtual environment:
   ```bash
   python3 -m venv /Volumes/WORK_2/models/Qwen3.5-venv
   ```
2. Activate the virtual environment:
   ```bash
   source /Volumes/WORK_2/models/Qwen3.5-venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install git+https://github.com/Blaizzy/mlx-vlm.git@main
   pip install torch torchvision
   ```

> **Note**: Always create a new venv in the target location to avoid path issues.

### Step 3: Start the Model Server
Use PM2 to manage the model server:
```bash
pm2 start /Volumes/WORK_2/models/Qwen3.5-venv/bin/python3 \
  --name "qwen3.5-api" \
  --interpreter none \
  -- -m mlx_vlm.server \
  --model /Volumes/WORK_2/models/Qwen3.5-9B-8bit \
  --host 0.0.0.0 --port 10012 --trust-remote-code
```

> **Tip**: The `pm2` tool ensures the server keeps running in the background.

### Step 4: Configure OpenClaw
1. Edit `config.json` to add the local model API:
   ```json
   {
      "models": {
         "mode": "merge",
         "providers": {
            "local": {
               "baseUrl": "http://10.0.6.26:10012",
               "apiKey": "DEADBEEF",
               "api": "openai-completions",
               "models": [
                  {
                     "id": "/Volumes/WORK_2/models/Qwen3.5-9B-8bit",
                     "name": "Qwen 3.5 9B",
                     "reasoning": false,
                     "input": ["text", "image"],
                     "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                     "contextWindow": 262144,
                     "maxTokens": 32768
                  }
               ]
            }
         }
      }
   }
   ```
2. Ensure the correct `apiKey` and base URL.

### Step 5: Debugging Tips
- For HTTP 422 errors, ensure you use the latest `mlx_vlm` version from GitHub.
- Test API requests directly:
   ```bash
   curl -X POST http://10.0.6.26:10012/chat/completions \
     -H "Content-Type: application/json" \
     -d '{"model":"...","messages":[{"role":"user","content":"hi"}],"stream":false}'
   ```
- Use proxies or debugging tools like `socat` to inspect requests.

This setup ensures OpenClaw integrates the Qwen3.5 9B model efficiently as a local inference engine. Let me know if you need a script to automate this process!