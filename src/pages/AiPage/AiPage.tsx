import Hero from "../HomePage/ui/Hero/Hero";
import "./AiPage.css";
import LeftSide from "./LeftSide/LeftSide";
import RightSide, { type IChatMessage } from "./RightSide/RightSide";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificSessionsDetail } from "@/api/ai";
import type { IServerMessage } from "@/types/SessionsDataTypes";

const AiPage = () => {
  const [selectedMode, setSelectedMode] = useState("CREATIVE");
  const { sessionId } = useParams();
  const [messages, setMessages] = useState<IChatMessage[]>([]);

  useEffect(() => {
    if (sessionId) {
      loadHistory(sessionId);
    } else {
      setMessages([]);
    }
  }, [sessionId]);

  const loadHistory = async (id: string) => {
    const data = await getSpecificSessionsDetail(id);
    const formattedHistory = data.messages.map((el: IServerMessage) => ({
      role: el.role,
      text: el.content,
    }));
    setMessages(formattedHistory);
  };

  return (
    <div className="ai-page-layout">
      <LeftSide
        sessionId={sessionId}
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
      />

      <main className="ai-main-wrapper">
        <div className="ai-header-container">
          <Hero />
        </div>

        <RightSide
          sessionId={sessionId}
          selectedMode={selectedMode}
          messages={messages}
          setMessages={setMessages}
        />
      </main>
    </div>
  );
};

export default AiPage;
