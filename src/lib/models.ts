export interface Model {
  id: string;
  label: string;
}

const modelIdDelimiter = "|";

export const getModelId = (providerId: string, providerModelId: string) =>
  `${providerId}${modelIdDelimiter}${providerModelId}`;

export const parseModelId = (
  modelId: string | null | undefined,
): { providerId: string; providerModelId: string } | undefined => {
  if (modelId) {
    const parts = modelId.split(modelIdDelimiter);
    if (parts.length === 2 && parts[0] && parts[1]) {
      return { providerId: parts[0], providerModelId: parts[1] };
    }
  }
  return undefined;
};

export const getAvailableModels = (): Model[] => {
  let models: Model[] = [];

  // Include Ollama models if locally installed
  if (process.env.OLLAMA_LOCAL_MODELS) {
    const ollamaModelIds = process.env.OLLAMA_LOCAL_MODELS.split(",")
      .map((modelId) => modelId.trim())
      .filter((modelId) => !!modelId);
    models = models.concat(
      ollamaModelIds.map((modelId) => ({
        id: getModelId("ollama", modelId),
        label: modelId,
      })),
    );
  }

  // Include Google models if API key set
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    models = models.concat([
      { id: getModelId("google", "models/gemini-pro"), label: "Gemini Pro" },
    ]);
  }

  // Include OpenAI models if API key set
  if (process.env.OPENAI_API_KEY) {
    models = models.concat([
      { id: getModelId("openai", "gpt-3.5-turbo"), label: "GPT-3.5 Turbo" },
    ]);
  }

  console.info("Available models", models);
  return models;
};
