import { useState } from "react";
import ModeContent, { type IContent } from "../ModeContent/ModeContent";
import HistoryContent from "../HistoryContent/HistoryContent";
import AISideSwitcher from "../AISideSwitcher/AISideSwitcher";
import "./OpenSidebar.css";

const OpenSidebar = ({
  selectedMode,
  isOpen,
  setter,
  setSelectedMode,
}: IContent) => {
  const [activeTab, setActiveTab] = useState<string>("main");

  return (
    <aside className="sidebar-container">
      <div style={{ display: activeTab === "main" ? "block" : "none" }}>
        <ModeContent
          selectedMode={selectedMode}
          isOpen={isOpen}
          setter={setter}
          setSelectedMode={setSelectedMode}
        />
      </div>

      <div style={{ display: activeTab === "history" ? "block" : "none" }}>
        <HistoryContent isOpen={isOpen} setter={setter} />
      </div>

      <AISideSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
    </aside>
  );
};

export default OpenSidebar;
