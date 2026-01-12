export interface IAILeftSideText {
  id: number;
  title: string;
  descriptions: string;
  mode: string;
}

export const AILeftSideText: IAILeftSideText[] = [
  {
    id: 1,
    title: "Creative mode",
    descriptions:
      "Creative mode could refer to a chatbot or AI language model designed to assist and inspire creativity. Such a chatbot or AI model might provide prompts, suggest ideas. ",
    mode: "CREATIVE",
  },
  {
    id: 2,
    title: "Balanced mode",
    descriptions:
      "Balance mode generally refers to an AI chatbot or language model designed to strike a balance between providing helpful responses and maintaining appropriate boundaries with users.",
    mode: "BALANCED",
  },
  {
    id: 3,
    title: "Strict mode",
    descriptions:
      "Strict mode generally refers to an AI chatbotor language model that is designed to strictly adhere to a set of predefined rules or guidelines for responding to user queries.",
    mode: "STRICT",
  },
];
