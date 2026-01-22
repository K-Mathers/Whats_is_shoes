import { useState } from "react";
import Hero from "../HomePage/ui/Hero/Hero";
import "./AdminPage.css";
import Dashboard from "./ui/Dashboard/Dashboard";
import Article from "./ui/Article/Article";

const AdminPage = () => {
  const [whichContent, setWhichContent] = useState<
    "dashboard" | "article" | "users"
  >("dashboard");
  return (
    <div className="admin-page-container flex flex-col min-h-screen">
      <Hero />
      <div className="comic-admin flex-1">
        <aside className="comic-sidebar">
          <div className="comic-logo">ADMIN!</div>
          <nav>
            <a
              href="#"
              onClick={() => setWhichContent("dashboard")}
              className={
                whichContent === "dashboard" ? "nav-item active" : "nav-item"
              }
            >
              DASHBOARD
            </a>
            <a
              href="#"
              onClick={() => setWhichContent("article")}
              className={
                whichContent === "article" ? "nav-item active" : "nav-item"
              }
            >
              ARTICLE
            </a>
            <a href="#" className="nav-item">
              USERS
            </a>
            <a href="#" className="nav-item">
              REPORTS
            </a>
            <a href="#" className="nav-item">
              SETTINGS
            </a>
          </nav>
          <div className="sidebar-footer">POW! v.1.0</div>
        </aside>
        {whichContent == "dashboard" && <Dashboard />}
        {whichContent == "article" && <Article />}
      </div>
    </div>
  );
};

export default AdminPage;
