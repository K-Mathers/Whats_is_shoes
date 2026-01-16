import { Typography } from "antd";
import React from "react";
import "./SidebarHeader.css";
import { useNavigate } from "react-router-dom";
import LogoSVG from "@/assets/HeaderAssets/LogoSVG/LogoSVG";

interface ISidebarHeader {
  isOpen: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarHeader = ({ isOpen, setter }: ISidebarHeader) => {
  const navigation = useNavigate();
  const { Title } = Typography;
  return (
    <div className="sidebar-header">
      <div className="logo-open-sidebar" onClick={() => setter(!isOpen)}>
        <LogoSVG />
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
