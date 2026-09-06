(() => {
  // Edit keywords here. * matches any word ending.
  const terms = [
    // General AI terminology
    'AI', 'ИИ', 'AGI', 'ASI', 'GenAI',
    'artificial intelligence',
    'artificial general intelligence',
    'artificial superintelligence',
    'generative AI',
    'machine learning',
    'deep learning',
    'neural network*',
    'large language model*',
    'large multimodal model*',
    'foundation model*',
    'frontier model*',
    'language model*',
    'reasoning model*',
    'vision language model*',
    'vision-language model*',
    'diffusion model*',
    'LLM*', 'VLM*', 'MLLM*',
    'нейросет*', 'нейронк*',
    'нейронн* сет*',
    'искусственн* интеллект*',
    'машинн* обучен*',
    'глубок* обучен*',
    'генеративн*',
    'языков* модел*',
    'мультимодальн* модел*',
    'диффузионн* модел*',
    'рассуждающ* модел*',

    // OpenAI
    'OpenAI', 'Open AI',
    'ChatGPT', 'Chat GPT', 'GPT*',
    'Codex', 'Sora', 'Astra', 'Астра', 'Сказка 5.1',
    'DALL-E', 'DALL·E', 'DALL E',
    'o1-mini', 'o1-preview', 'o1-pro',
    'o3-mini', 'o3-pro', 'o4-mini',
    'чатгпт', 'чат гпт', 'чатжпт', 'чатижпт',
    'опенаи', 'опен аи',

    // Anthropic
    'Anthropic', 'Claude*',
    'Claude Code', 'ClaudeCode',
    'Claude Cowork',
    'антропик', 'клод*', 'клауд код',

    // Google
    'DeepMind', 'Gemini*', 'Gemma*',
    'Google AI Studio', 'GoogleAIStudio',
    'NotebookLM', 'Notebook LM',
    'Imagen*', 'Veo',
    'Nano Banana', 'NanoBanana',
    'джемини', 'джеминай', 'гемини',
    'нано банан*', 'нанобанан*',

    // Other model families and labs
    'DeepSeek*', 'Deep Seek', 'дипсик*', 'дипсик',
    'Qwen*', 'QwQ*', 'QvQ*', 'квен*',
    'ChatGLM*', 'GLM-*', 'GLM4*', 'GLM5*',
    'Z.ai', 'Zhipu',
    'Kimi', 'Moonshot AI', 'MoonshotAI',
    'MiniMax AI', 'MiniMaxAI', 'MiniMax-M*',
    'Grok*', 'xAI',
    'Meta AI', 'Llama', 'Llama2*', 'Llama3*', 'Llama4*',
    'CodeLlama*',
    'Mistral AI', 'MistralAI',
    'Mistral Large', 'Mistral Small',
    'Mixtral*', 'Codestral*', 'Devstral*', 'Ministral*',
    'Pixtral*', 'Magistral*',
    'DeepHermes*', 'NousResearch', 'Nous Research',
    'OLMo*', 'SmolLM*', 'SmolVLM*',
    'Phi-3*', 'Phi-4*',
    'Hunyuan*', 'ERNIE Bot',
    'GigaChat*', 'гигачат*',
    'YandexGPT*', 'ЯндексGPT*', 'яндекс гпт',

    // AI coding tools
    'GitHub Copilot', 'GitHubCopilot',
    'Microsoft Copilot',
    'Cursor AI', 'CursorAI', 'Cursor IDE', 'CursorIDE',
    'Windsurf', 'Codeium',
    'Cline', 'Roo Code', 'RooCode',
    'OpenCode', 'OpenHands',
    'Tabnine', 'Continue.dev',
    'Amazon Q Developer',
    'Gemini CLI', 'GeminiCLI',
    'Replit Agent', 'Replit AI',
    'Bolt.new', 'Lovable.dev', 'v0.dev',
    'coding agent*', 'coding assistant*',
    'agentic coding', 'agentic workflow*',
    'agentic AI',
    'vibe cod*', 'vibe-cod*', 'vibecod*',
    'вайбкод*', 'вайб код*', 'вайб-код*',
    'вибкод*',
    'ИИ агент*', 'ИИ-агент*', 'ИИагент*',
    'AI agent*', 'AI-agent*', 'AIagent*',
    'нейроагент*',

    // Image, video and audio generation
    'Midjourney', 'миджорни',
    'Stable Diffusion', 'StableDiffusion',
    'Stability AI', 'StabilityAI',
    'SDXL', 'SD3.5',
    'Black Forest Labs',
    'FLUX.1', 'FLUX.2', 'FLUX Kontext',
    'FLUX Dev', 'FLUX Schnell',
    'ComfyUI', 'Comfy UI',
    'AUTOMATIC1111', 'A1111',
    'ControlNet*', 'IP-Adapter*',
    'AnimateDiff*',
    'Kling AI', 'KlingAI',
    'Hailuo*',
    'RunwayML', 'Runway ML',
    'Luma AI', 'LumaAI', 'Dream Machine',
    'Pika Labs', 'PikaLabs',
    'LTX-Video', 'LTX Video', 'LTX Studio',
    'Wan2*', 'Wan 2*',
    'HunyuanVideo*', 'Hunyuan Video',
    'Seedance*', 'Seedream*',
    'Higgsfield*',
    'Leonardo AI', 'Leonardo.ai',
    'Adobe Firefly',
    'Suno', 'Udio',
    'ElevenLabs', 'Eleven Labs',
    'Fish Audio', 'FishAudio',
    'Zonos', 'F5-TTS', 'XTTS',
    'Qwen-TTS', 'Qwen3-TTS',
    'voice cloning', 'voice clone*',
    'deepfake*', 'дипфейк*',
    'text-to-image', 'text to image',
    'text-to-video', 'text to video',
    'image-to-video', 'image to video',
    'нейроарт*', 'нейромузык*',
    'нейровидео*', 'нейрокартинк*',

    // Local inference and AI infrastructure
    'Hugging Face', 'HuggingFace', 'HuggingChat',
    'Ollama', 'LM Studio', 'LMStudio',
    'llama.cpp', 'llama-cpp', 'llamacpp',
    'llama-server',
    'vLLM', 'SGLang',
    'TensorRT-LLM',
    'OpenRouter', 'LiteLLM',
    'LocalAI', 'Jan.ai',
    'Open WebUI', 'OpenWebUI',
    'text-generation-webui',
    'oobabooga',
    'KoboldCpp', 'SillyTavern',
    'MLX-LM', 'MLX-VLM',
    'ExLlama*',
    'GGUF', 'GGML', 'GPTQ',
    'Unsloth', 'LLaMA-Factory',
    'LangChain', 'LangGraph',
    'LlamaIndex',
    'Haystack AI',
    'Semantic Kernel',
    'CrewAI', 'PydanticAI',
    'smolagents',
    'Model Context Protocol',
    'MCP server*', 'MCP client*', 'MCP tool*',
    'MCP сервер*', 'MCP-сервер*',
    'MCP клиент*', 'MCP-клиент*',

    // Training, prompting and evaluation
    'prompt engineering',
    'prompt injection',
    'system prompt*',
    'prompt caching',
    'prompt tuning',
    'промпт*', 'промт*',
    'context engineering',
    'context window*',
    'контекстн* окн*',
    'chain of thought', 'chain-of-thought',
    'test-time compute',
    'test time scaling', 'test-time scaling',
    'retrieval augmented generation',
    'retrieval-augmented generation',
    'RAG pipeline*', 'RAG system*',
    'RAG систем*', 'RAG-систем*',
    'fine-tun*', 'finetun*', 'fine tun*',
    'файнтюн*', 'файн-тюн*',
    'RLHF', 'RLAIF', 'GRPO',
    'QLoRA',
    'low-rank adaptation',
    'low rank adaptation',
    'supervised fine-tuning',
    'direct preference optimization',
    'reinforcement learning',
    'обучен* с подкреплен*',
    'knowledge distillation',
    'model distillation',
    'дистилляц* модел*',
    'mixture of experts', 'mixture-of-experts',
    'KV cache', 'KV-cache',
    'speculative decoding',
    'flash attention', 'FlashAttention*',
    'SWE-bench', 'SWEBench',
    'HumanEval', 'MMLU*', 'GPQA*',
    'LiveCodeBench', 'Aider Polyglot',
    'Terminal-Bench',
    'Chatbot Arena', 'LMArena',

    // AI discourse and generated content
    'AI slop', 'AIslop',
    'AI-generated', 'AI generated',
    'AI-powered', 'AI powered',
    'AI-assisted', 'AI assisted',
    'AI art', 'AI artist*',
    'AI music', 'AI video*',
    'AI influencer*',
    'AI startup*',
    'AI safety', 'AI alignment',
    'AI doom*',
    'нейрослоп*', 'нейрошлак*',
    'ИИ-слоп*', 'ИИ слоп*',
    'сгенерирован* нейросет*',
    'сгенерирован* ИИ',
    'написан* нейросет*',
    'написан* ИИ',
  ];

  const normalize = s => String(s).normalize('NFKC').toLowerCase().replace(/ё/g,'е');
  function compile(input) {
    return String(input).split('\n').map(x=>x.trim()).filter(Boolean).slice(0,500).map(term=>{
      const source = normalize(term).slice(0,160).split(/\s+/u).map(word => word.split('*').map(part=>part.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('[\\p{L}\\p{N}_]*')).join('\\s+');
      return {term, regex:new RegExp('(?:^|[^\\p{L}\\p{N}_])'+source+'(?=$|[^\\p{L}\\p{N}_])','u')};
    });
  }
  function match(text, rules) { const s=normalize(text); return rules.find(r=>r.regex.test(s))?.term || null; }
  const rules = compile(terms.join('\n'));
  const selector = 'article[data-testid="tweet"]';
  const style = document.createElement('style');
  style.textContent = `
    article[data-no-ai-folded] > :not(.no-ai-notice) { display: none !important; }
    .no-ai-notice { display:flex; align-items:center; justify-content:space-between;
      gap:12px; padding:16px; color:#71767b; font:14px/1.4 system-ui; }
    .no-ai-notice button { flex-shrink:0; padding:7px 14px; border:1px solid #71767b;
      border-radius:999px; background:transparent; color:#1d9bf0; font:600 13px system-ui;
      cursor:pointer; }
    .no-ai-notice button:hover { background:rgba(29,155,240,.1); }
    .no-ai-notice button:focus-visible { outline:2px solid #1d9bf0; outline-offset:2px; }
  `;
  document.documentElement.append(style);
  const states = new WeakMap();

  function filter(article) {
    const text = [...article.querySelectorAll(
      '[data-testid="tweetText"], [data-testid="User-Name"]'
    )].map(node => node.innerText || node.textContent).join('\n');
    const permalink = article.querySelector('time')?.closest('a')?.getAttribute('href') || '';
    const key = permalink + '\n' + text;
    const previous = states.get(article);
    const notice = article.querySelector(':scope > .no-ai-notice');
    // Keep manually opened posts open; rebuild placeholders if X removes them.
    if (previous?.key === key && (previous.open || !previous.reason || notice)) return;
    article.removeAttribute('data-no-ai-folded');
    notice?.remove();
    const reason = match(text, rules);
    const state = {key, reason, open: false};
    states.set(article, state);
    if (!reason) return;

    const placeholder = document.createElement('div');
    placeholder.className = 'no-ai-notice';
    const label = document.createElement('span');
    label.textContent = 'AI post hidden';
    label.title = 'Matched keyword: ' + reason;
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Open shit';
    button.setAttribute('aria-label', 'Open hidden AI post');
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      state.open = true;
      article.removeAttribute('data-no-ai-folded');
      placeholder.remove();
    });
    placeholder.append(label, button);
    article.setAttribute('data-no-ai-folded', 'true');
    article.append(placeholder);
  }

  // Process only changed cards; X adds and reuses them while scrolling.
  const pending = new Set();
  let timer;
  function queue(article) {
    if (!article) return;
    pending.add(article);
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      for (const card of pending) if (card.isConnected) filter(card);
      pending.clear();
    }, 50);
  }
  function discover(node) {
    const element = node.nodeType === 1 ? node : node.parentElement;
    if (!element) return;
    queue(element.closest(selector));
    element.querySelectorAll(selector).forEach(queue);
  }
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') discover(record.target);
      else {
        queue(record.target.closest?.(selector));
        record.addedNodes.forEach(discover);
      }
    }
  }).observe(document.body, {subtree: true, childList: true, characterData: true});
  document.querySelectorAll(selector).forEach(filter);
})();
