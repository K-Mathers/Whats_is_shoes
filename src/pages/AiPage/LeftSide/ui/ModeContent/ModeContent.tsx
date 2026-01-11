import Arrow from "@/assets/AIAssets/Arrow";
import { AILeftSideText } from "@/const/AILeftSideConst";
import { Typography } from "antd";
import "./ModeContent.css";
import Checkbox from "@/assets/AIAssets/Checkbox";

export interface IContent {
  isOpen: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModeContent = ({ isOpen, setter }: IContent) => {
  const { Title, Text } = Typography;
  return (
    <div className="mode-section">
      <div className="title-block">
        <Title level={2} className="main-title">
          Main
        </Title>
        <div onClick={() => setter(!isOpen)} className="arrow-svg">
          <Arrow />
        </div>
      </div>
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
  );
};

export default ModeContent;
