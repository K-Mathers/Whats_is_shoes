import Arrow from "@/assets/AIAssets/Arrow";
import { Typography } from "antd";
import React from "react";
import "./SidebarHeader.css";

interface ISidebarHeader {
  title: string;
  subtitle: string;
  isOpen: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarHeader = ({
  title,
  subtitle,
  isOpen,
  setter,
}: ISidebarHeader) => {
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
      <Title level={4} className="section-title">
        {subtitle}
      </Title>
    </div>
  );
};
