import { useState } from "react";
import ModeContent, { type IContent } from "../ModeContent/ModeContent";
import HistoryContent from "../HistoryContent/HistoryContent";
import AISideSwitcher from "../AISideSwitcher/AISideSwitcher";

const OpenSidebar = ({ isOpen, setter }: IContent) => {
  const [activeTab, setActiveTab] = useState<string>("main");
  return (
    <aside className="sidebar-container">
      {activeTab === "main" ? (
        <ModeContent isOpen={isOpen} setter={setter} />
      ) : (
        <HistoryContent isOpen={isOpen} setter={setter} />
      )}
      <AISideSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
    </aside>
  );
};

export default OpenSidebar;
