import { useState } from "react";
import Hero from "../HomePage/ui/Hero/Hero";
import "./AdminPage.css";
import Dashboard from "./ui/Dashboard/Dashboard";
import Article from "./ui/Article/Article";
import Messages from "./ui/Messages/Messages";

const AdminPage = () => {
  const [whichContent, setWhichContent] = useState<
    "dashboard" | "article" | "users" | "messages"
  >("dashboard");
  return (
    <div className="admin-page-container flex flex-col h-screen overflow-hidden">
      <Hero />
      <div className="comic-admin flex-1">
        <aside className="comic-sidebar">
          <div className="comic-logo">ADMIN!</div>
          <nav>
            <button
              onClick={() => setWhichContent("dashboard")}
              className={
                whichContent === "dashboard" ? "nav-item active" : "nav-item"
              }
            >
              DASHBOARD
            </button>
            <button
              onClick={() => setWhichContent("article")}
              className={
                whichContent === "article" ? "nav-item active" : "nav-item"
              }
            >
              ARTICLE
            </button>
            <button
              onClick={() => setWhichContent("messages")}
              className={
                whichContent === "messages" ? "nav-item active" : "nav-item"
              }
            >
              MESSAGES
            </button>
            <button className="nav-item">USERS</button>
            {/* <a href="#" className="nav-item">
              REPORTS
            </a>
            <a href="#" className="nav-item">
              SETTINGS
            </a> */}
          </nav>
          <div className="sidebar-footer">POW! v.1.0</div>
        </aside>
        {whichContent == "dashboard" && <Dashboard />}
        {whichContent == "article" && <Article />}
        {whichContent == "messages" && <Messages />}
      </div>
    </div>
  );
};

export default AdminPage;
