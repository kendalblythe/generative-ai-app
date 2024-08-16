import { ChatView } from "@/components/ChatView";
import { getAvailableModels } from "@/lib/models";

const models = getAvailableModels();

export default function Page() {
  return <ChatView models={models} />;
}
