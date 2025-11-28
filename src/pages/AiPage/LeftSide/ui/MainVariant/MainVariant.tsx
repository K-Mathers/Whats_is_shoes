import { Typography } from "antd";
import "./MainVariant.css";
import AISideSwitcher from "../AISideSwitcher/AISideSwitcher";
import Checkbox from "@/assets/AIAssets/Checkbox";
import { AILeftSideText } from "@/const/AILeftSideConst";

const { Title, Text } = Typography;

const MainVariant = () => {
  return (
    <aside className="sidebar-container">
      <Title level={2} className="main-title">
        Main
      </Title>
      <div className="mode-section">
        <Title level={4} className="section-title">
          Mode
        </Title>
        <div className="cards-list">
          {AILeftSideText.map((el, index) => (
            <div key={index} className="card-block">
              <div className="card-icon">
                <Checkbox />
              </div>

              <div className="card-content">
                <Text className="mode-title">{el.title}</Text>
                <Text className="mode-description">{el.descriptions}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AISideSwitcher />
    </aside>
  );
};

export default MainVariant;
