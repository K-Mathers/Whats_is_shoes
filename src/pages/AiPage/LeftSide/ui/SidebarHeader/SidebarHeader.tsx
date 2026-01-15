import Arrow from "@/assets/AIAssets/Arrow";
import { Typography } from "antd";
import React from "react";
import "./SidebarHeader.css";
import { useNavigate } from "react-router-dom";

interface ISidebarHeader {
  title: string;
  isOpen: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarHeader = ({ title, isOpen, setter }: ISidebarHeader) => {
  const navigation = useNavigate();
  const { Title } = Typography;
  return (
    <div>
      <div className="title-block">
        <Title level={2} className="main-title">
          {title}
        </Title>
        <div onClick={() => setter(!isOpen)} className="arrow-svg">
          <Arrow />
        </div>
      </div>
      <Title
        onClick={() => navigation("/ai")}
        level={4}
        className="section-title"
      >
        New Chat
      </Title>
    </div>
  );
};
