"use client";

import type { Model } from "@/lib/models";
import { useChat } from "ai/react";
import { clsx } from "clsx";
import { type FormEvent, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { PulseLoader } from "react-spinners";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export interface ChatViewProps {
  models: Model[];
}

export const ChatView = ({ models }: ChatViewProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [modelId, setModelId] = useState(models[0]?.id ?? "");

  const {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setMessages,
    stop,
  } = useChat({ body: { modelId } });

  // Scroll last message into view on messages change
  useEffect(() => {
    if (messages.length) {
      const lastMessageId = messages[messages.length - 1].id;
      document.getElementById(lastMessageId)?.scrollIntoView(false);
    }
  }, [messages]);

  // Handle form submit
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (isLoading) {
      event.preventDefault(); // Prevent submit while loading
    } else {
      handleSubmit(event);
    }
  };

  // Handle model change
  const handleModelChange = (modelId: string) => {
    setModelId(modelId);
    stop(); // Stop current chat request
    setMessages([]);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="grow p-4 overflow-auto">
        {messages.map((m) => (
          <div key={m.id} id={m.id} className="mb-4">
            {m.role === "user" ? "User: " : "AI: "}
            <Markdown>{m.content}</Markdown>
          </div>
        ))}
      </div>
      <div className="flex my-4 px-4 justify-between gap-4">
        <div className="flex w-full items-center">
          <form
            className="min-w-40 max-w-80 w-full"
            onSubmit={handleFormSubmit}
          >
            <Input
              ref={inputRef}
              className="w-full"
              autoFocus
              value={input}
              aria-label="Ask AI"
              placeholder="Ask AI..."
              disabled={models.length === 0}
              onChange={handleInputChange}
            />
          </form>
          <PulseLoader
            className={clsx("mx-2", !isLoading && "invisible")}
            speedMultiplier={0.75}
            size={8}
          />
        </div>
        <Select value={modelId} onValueChange={handleModelChange}>
          <SelectTrigger
            className="min-w-32 max-w-48 w-full"
            aria-label="Large language model"
          >
            <SelectValue placeholder="No available models" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Models</SelectLabel>
              {models.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
