import { useEffect, useState } from "react";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import "./HistoryContent.css";
import { deleteSession, getUserSessions, renameSession } from "@/api/ai";
import { useNavigate, useParams } from "react-router-dom";
import dotsImage from "@/assets/AIAssets/dots.png";
import { Dropdown, Input, type MenuProps } from "antd";

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
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(
    null
  );
  const [editTitle, setEditTitle] = useState("");

  const { sessionId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    try {
      await deleteSession(id);
      setUserSession((prev) => prev.filter((el) => el.id !== id));
      if (sessionId === id) navigate("/ai");
    } catch (e) {
      console.error(e);
    }
  };

  const handleFormattingSessions = (text: string) => {
    const words = text.trim().split(/\s+/);

    return words.length > 4 ? words.slice(0, 4).join(" ") + "..." : text;
  };

  const handleSaveRename = async (id: string) => {
    await renameSession(id, { title: editTitle });
    setUserSession((prev) =>
      prev.map((el) => (el.id === id ? { ...el, title: editTitle } : el))
    );
    setSelectedSessionId(null);
  };

  const getMenuItems = (
    id: string,
    currentTitle: string
  ): MenuProps["items"] => [
      {
        label: "Rename",
        key: "rename",
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          setSelectedSessionId(id);
          setEditTitle(currentTitle);
        },
      },
      { type: "divider" },
      {
        label: "Delete",
        key: "delete",
        danger: true,
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          handleDelete(id);
        },
      },
    ];

  useEffect(() => {
    const handleGetSessions = async () => {
      const allSessions = await getUserSessions();
      setUserSession(allSessions);
    };
    handleGetSessions();
  }, []);

  return (
    <div className="history-section">
      <SidebarHeader isOpen={isOpen} setter={setter} />
      <div className="user-history">
        {userSessions.map((el) => (
          <div
            key={el.id}
            onClick={() =>
              selectedSessionId !== el.id && navigate(`/ai/${el.id}`)
            }
            className={`session ${sessionId === el.id ? "active" : ""}`}
          >
            {selectedSessionId === el.id ? (
              <Input
                value={editTitle}
                autoFocus
                onChange={(e) => setEditTitle(e.target.value)}
                onPressEnter={() => handleSaveRename(el.id)}
                onBlur={() => setSelectedSessionId(null)}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <>
                <span className="session-title">
                  {handleFormattingSessions(el.title)}
                </span>
                <div onClick={(e) => e.stopPropagation()}>
                  <Dropdown
                    menu={{ items: getMenuItems(el.id, el.title) }}
                    trigger={["click"]}
                    placement="bottomRight"
                    overlayClassName="comic-dropdown"
                  >
                    <div className="dots-trigger">
                      <img
                        className="dots-image"
                        src={dotsImage}
                        alt="options"
                      />
                    </div>
                  </Dropdown>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryContent;
