export interface IServerMessage {
  id: string;
  role: "USER" | "ASSISTANT";
  sessionId: string;
  createdAt: string;
  imageUrl: string | null;
  content: string;
}

export interface IChatSession {
  id: string;
  title: string;
  userId: string;
  mode: "CREATIVE" | "BALANCED" | "STRICT";
  createdAt: string;
  messages: IServerMessage[];
}
