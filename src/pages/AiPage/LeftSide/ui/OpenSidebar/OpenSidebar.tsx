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
      {activeTab === "main" ? (
        <ModeContent
          selectedMode={selectedMode}
          isOpen={isOpen}
          setter={setter}
          setSelectedMode={setSelectedMode}
        />
      ) : (
        <HistoryContent isOpen={isOpen} setter={setter} />
      )}
      <AISideSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
    </aside>
  );
};

export default OpenSidebar;
