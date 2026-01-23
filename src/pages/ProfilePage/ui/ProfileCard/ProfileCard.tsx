import { useEffect, useState } from "react";
import "./ProfileCard.css";
import { getUser } from "@/api/auth";
import GeneralPage from "../Sections/GeneralSection";
import SecurityPage from "../Sections/SecuritySection";
import FargotPassPage from "../Sections/FargotPassSection";
import VerifEmailPage from "../Sections/VerifEmailSection";
import LogoutPage from "../Sections/LogoutSection";
import { TAB_TITLES } from "../../lib";

const ProfileCard = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof TAB_TITLES>("general");
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    createdAt: "",
    isVerified: "",
  });
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotStep, setForgotStep] = useState(1);
  const [verifStep, setVerifStep] = useState(1);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUser();
        setFormData(data);
        setForgotEmail(data.email);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    setForgotStep(1);
    setVerifStep(1);
  }, [activeTab]);

  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <div className="profile-sidebar__title">PROFILE!</div>

        <button
          className={`profile-sidebar__btn ${
            activeTab === "general" ? "profile-sidebar__btn--active" : ""
          }`}
          onClick={() => setActiveTab("general")}
        >
          General Info
        </button>

        <button
          className={`profile-sidebar__btn ${
            activeTab === "security" ? "profile-sidebar__btn--active" : ""
          }`}
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>

        <button
          className={`profile-sidebar__btn ${activeTab === "forgotPass" ? "profile-sidebar__btn--active" : ""}`}
          onClick={() => setActiveTab("forgotPass")}
        >
          Forgot Password
        </button>

        <button
          className={`profile-sidebar__btn ${activeTab === "verifEmail" ? "profile-sidebar__btn--active" : ""}`}
          onClick={() => setActiveTab("verifEmail")}
        >
          Verification Email
        </button>

        <button
          className={`profile-sidebar__btn ${activeTab === "logout" ? "profile-sidebar__btn--active" : ""}`}
          onClick={() => setActiveTab("logout")}
        >
          Logout
        </button>
      </aside>

      <main className="profile-content">
        <div className="profile-card">
          <div className="profile-card__header">
            <h2 className="profile-card__title">{TAB_TITLES[activeTab]}</h2>
            {activeTab === "general"}
          </div>
          <GeneralPage activeTab={activeTab} formData={formData} />

          <SecurityPage
            activeTab={activeTab}
            passwordData={passwordData}
            setPasswordData={setPasswordData}
          />

          <FargotPassPage
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            forgotStep={forgotStep}
            setForgotStep={setForgotStep}
            forgotEmail={forgotEmail}
            setForgotEmail={setForgotEmail}
          />

          <VerifEmailPage
            activeTab={activeTab}
            verifStep={verifStep}
            setVerifStep={setVerifStep}
            formData={formData}
            setFormData={setFormData}
          />

          <LogoutPage activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default ProfileCard;
