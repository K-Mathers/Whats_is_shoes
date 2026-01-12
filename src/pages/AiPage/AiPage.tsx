import "./AiPage.css";
import Hero from "../../components/HomePage/ui/Hero/Hero";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useState } from "react";

const AiPage = () => {
  const [selectedMode, setSelectedMode] = useState("CREATIVE");
  return (
    <div className="ai-page-layout">
      <LeftSide selectedMode={selectedMode} setSelectedMode={setSelectedMode} />

      <main className="ai-main-wrapper">
        <div className="ai-header-container">
          <Hero />
        </div>

        <RightSide
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      </main>
    </div>
  );
};

export default AiPage;
