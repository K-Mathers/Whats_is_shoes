import "./AiPage.css";
import Hero from "../../components/HomePage/ui/Hero/Hero";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const AiPage = () => {
  return (
    <div className="ai-page-layout">
      <div className="ai-sidebar-wrapper">
        <LeftSide />
      </div>

      <main className="ai-main-wrapper">
        <div className="ai-header-container">
          <Hero />
        </div>

        <RightSide />
      </main>
    </div>
  );
};

export default AiPage;
