import { useEffect, useState } from "react";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import "./HistoryContent.css";
import { getUserSessions } from "@/api/ai";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

interface IHistoryContent {
  isOpen: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUserSession {
  id: string;
  createdAt: string;
  mode: string;
  title: string;
}

const HistoryContent = ({ isOpen, setter }: IHistoryContent) => {
  const [userSessions, setUserSession] = useState<IUserSession[]>([]);
  const navigate = useNavigate();

  const handleFormattingSessions = (text: string) => {
    const words = text.trim().split(/\s+/);

    return words.length > 4 ? words.slice(0, 4).join(" ") + "..." : text;
  };

  useEffect(() => {
    const handleGetSessions = async () => {
      const allSessions = await getUserSessions();
      setUserSession(allSessions);
    };
    handleGetSessions();
  }, []);

  return (
    <div className="history-section">
      <SidebarHeader
        title="History"
        subtitle="History"
        isOpen={isOpen}
        setter={setter}
      />
      <div className="user-history">
        {userSessions.map((el) => {
          return (
            <div onClick={() => navigate(`/ai/${el.id}`)} className="session">
              <Typography>{handleFormattingSessions(el.title)}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryContent;
