# Generative AI App
## Introduction

This app is my playground for implementing <a href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence">generative AI</a>  (GenAI) using freely available <a href="https://en.wikipedia.org/wiki/Large_language_model">large language models</a> (LLMs) that can run locally on any computer.

This project initially includes a chatbot that can respond to user prompts. Future plans for this project include...

- <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation">Retrieval-augmented generation</a> (RAG)
- Image generation
- Image analysis

## Technologies

- <a href="https://reactjs.org/">React</a>
- <a href="https://www.typescriptlang.org/">TypeScript</a>
- <a href="https://www.javascript.com/">JavaScript</a>
- <a href="https://nextjs.org/">Next.js</a>
- <a href="https://vercel.com/">Vercel</a>
- <a href="https://sdk.vercel.ai/">Vercel AI SDK</a>
  - <a href="https://github.com/sgomez/ollama-ai-provider">Ollama AI SDK Provider</a>
  - <a href="https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai">Google AI SDK Provider</a>
  - <a href="https://sdk.vercel.ai/providers/ai-sdk-providers/openai">OpenAI AI SDK Provider</a>
- <a href="https://ollama.com/">Ollama</a>
- <a href="https://tailwindcss.com/">Tailwind CSS</a>
- <a href="https://ui.shadcn.com/">shadcn/ui</a>
- <a href="https://remarkjs.github.io/react-markdown/">React Markdown</a>
- <a href="https://www.davidhu.io/react-spinners/">React Spinners</a>
- <a href="https://code.visualstudio.com/">Visual Studio Code</a>
- <a href="https://biomejs.dev/">Biome</a>
- <a href="https://pnpm.io/">pnpm</a>

## Getting Started

After you clone the Git repository, you can run the following
<a href="https://pnpm.io/">pnpm</a> commands.

- `pnpm install` - install packages
- `pnpm dev` - run in development mode
- `pnpm build` - build production app
- `pnpm start` - run in production mode
- `pnpm lint` - lint check
- `pnpm format` - format code

## Ollama Setup

<a href="https://ollama.com/">Ollama</a> allows you to download and run freely available LLMs on your local computer.

### Install Ollama
- https://ollama.com/download
- https://github.com/ollama/ollama

### Download Ollama LLMs
- See models here: https://ollama.com/library
- The project <a href="">.env.example</a> file references the following models
  - <a href="https://ollama.com/library/phi3">Phi-3</a>
  - <a href="https://ollama.com/library/llama3">Meta Llama 3</a>
- `ollama run phi3`
- `ollama run llama3`

### Update .env
```properties
OLLAMA_LOCAL_MODELS=phi3,llama3
```

## Google Gemini Setup

### Update .env
```properties
GOOGLE_GENERATIVE_AI_API_KEY=<Your API key>
```
- Get an API key: https://ai.google.dev/gemini-api/docs/api-key
- Google Gemini models do have a <a href="https://ai.google.dev/pricing">free plan</a>!

## OpenAI Setup

### Update .env
```properties
OPENAI_API_KEY=<Your API key>
```
- Get an API key: https://platform.openai.com/api-keys
- OpenAI GPT models are <a href="https://openai.com/api/pricing/">not free</a>!

## Developer

<a href="https://github.com/kendalblythe">Kendal Blythe</a> - Check me out on
<a href="https://www.linkedin.com/in/kendal-blythe/">LinkedIn</a>!
