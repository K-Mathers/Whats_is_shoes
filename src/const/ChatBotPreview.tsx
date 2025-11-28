import ExampleIcon from "@/assets/AIAssets/ExampleIcon";
import Star from "@/assets/AIAssets/Star";
import Warning from "@/assets/AIAssets/Warning";
import type { JSX } from "react";

interface IBlockText {
  blockTitle?: string;
  blockDescription: string;
}

interface IChatBotPreview {
  id: number;
  blockIcon: JSX.Element;
  firstBlock: IBlockText;
  secondBlock: IBlockText;
  thirdBlock: IBlockText;
}

export const ChatBotPreview: IChatBotPreview[] = [
  {
    id: 1,
    blockIcon: <ExampleIcon />,
    firstBlock: {
      blockTitle: "Examples",
      blockDescription: "Explain your ideas in simple terms →",
    },
    secondBlock: {
      blockDescription: "Adidas superstar better than air max 90?",
    },
    thirdBlock: {
      blockDescription:
        "Which sneakers I should buy for long times and still trend?",
    },
  },
  {
    id: 2,
    blockIcon: <Star />,
    firstBlock: {
      blockTitle: "Capabilities",
      blockDescription: "Remembers what user said earlier in the conversation",
    },
    secondBlock: {
      blockDescription: "Work only with sneakers content at the time",
    },
    thirdBlock: {
      blockDescription: "Trained to decline inappropriate requests",
    },
  },
  {
    id: 3,
    blockIcon: <Warning />,
    firstBlock: {
      blockTitle: "Limitations",
      blockDescription: "May occasionally generate incorrect information",
    },
    secondBlock: {
      blockDescription:
        "May occasionally produce harmful instructions or biased",
    },
    thirdBlock: {
      blockDescription: "Limited knowledge of world and events after 2021",
    },
  },
];
