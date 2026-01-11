import "./AISideSwitcher.css";
import Vector from "@/assets/AIAssets/Vector";

interface IAISideSwitcher {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const AISideSwitcher = ({ activeTab, setActiveTab }: IAISideSwitcher) => {
  return (
    <div className={`switcher-track state-${activeTab}`}>
      <div className="switcher-pill" />

      <button
        className={`switcher-button ${
          activeTab === "history" ? "is-active" : ""
        }`}
        onClick={() => setActiveTab("history")}
        type="button"
      >
        <Vector fill={activeTab === "history" ? "#fff" : "#767676"} />
        <span>History</span>
      </button>

      <button
        className={`switcher-button ${activeTab === "main" ? "is-active" : ""}`}
        onClick={() => setActiveTab("main")}
        type="button"
      >
        <Vector fill={activeTab === "main" ? "#fff" : "#767676"} />
        <span>Main</span>
      </button>
    </div>
  );
};

export default AISideSwitcher;
