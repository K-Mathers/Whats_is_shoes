import { AILeftSideText } from "@/const/AILeftSideConst";
import { Radio, Typography } from "antd";
import "./ModeContent.css";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";

export interface IContent {
  isOpen: boolean;
  selectedMode: string;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
}

const ModeContent = ({
  selectedMode,
  isOpen,
  setter,
  setSelectedMode,
}: IContent) => {
  const { Text } = Typography;
  return (
    <div className="mode-section">
      <SidebarHeader title="Main" isOpen={isOpen} setter={setter} />
      <Radio.Group
        value={selectedMode}
        style={{ width: "100%" }}
        onChange={(e) => setSelectedMode(e.target.value)}
      >
        <div className="cards-list">
          {AILeftSideText.map((el) => (
            <div
              key={el.id}
              className="card-block"
              onClick={() => setSelectedMode(el.mode)}
            >
              <div className="card-icon">
                <Radio value={el.mode} />
              </div>

              <div className="card-content">
                <Text className="mode-title">{el.title}</Text>
                <Text className="mode-description">{el.descriptions}</Text>
              </div>
            </div>
          ))}
        </div>
      </Radio.Group>
    </div>
  );
};

export default ModeContent;
