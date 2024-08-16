import { parseModelId } from "@/lib/models";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { type LanguageModel, streamText } from "ai";
import { NextResponse } from "next/server";
import { ollama } from "ollama-ai-provider";

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, modelId } = json;
  const { providerId, providerModelId } = parseModelId(modelId) ?? {};
  if (!providerId || !providerModelId)
    return getInvalidModelIdResponse(modelId);

  console.info(new Date(), json);

  let model: LanguageModel;
  switch (providerId) {
    case "ollama":
      model = ollama(providerModelId);
      break;
    case "google":
      model = google(providerModelId);
      break;
    case "openai":
      model = openai(providerModelId);
      break;
    default:
      return getInvalidModelIdResponse(modelId);
  }

  const result = await streamText({ model, messages });
  return result.toDataStreamResponse();
}

const getInvalidModelIdResponse = (modelId: string) =>
  NextResponse.json(
    { message: `Invalid model id: ${modelId}` },
    { status: 400 },
  );
