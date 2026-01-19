import { useEffect, useState } from "react";
import "./ProfileCard.css";
import { changePassword, getUser, logoutUser, } from "@/api/auth";
import { useNavigate } from "react-router-dom";

const TAB_TITLES = {
  general: "General",
  security: "Security Settings",
  forgotPass: "Password Recovery",
  verifEmail: "Email Verification",
  logout: "Sign Out",
};

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_TITLES>("general");
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    createdAt: "",
    isVerified: "",
  });
  const [forgotEmail, setForgotEmail] = useState("");
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerification = async () => { };

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

  const handleSaveResetPass = async () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Enter all");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords don't exit's");
      return;
    }

    try {
      await changePassword({ currentPassword, newPassword });
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <div className="profile-sidebar__title">PROFILE!</div>

        <button
          className={`profile-sidebar__btn ${activeTab === "general" ? "profile-sidebar__btn--active" : ""}`}
          onClick={() => setActiveTab("general")}
        >
          General Info
        </button>

        <button
          className={`profile-sidebar__btn ${activeTab === "security" ? "profile-sidebar__btn--active" : ""}`}
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

          {activeTab === "general" && (
            <>
              <div className="profile-form__group">
                <label className="profile-form__label">Email Address</label>
                <input
                  name="email"
                  className="profile-form__input"
                  value={formData.email}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-form__group">
                <label className="profile-form__label">Role</label>
                <input
                  name="role"
                  className="profile-form__input"
                  value={formData.role}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-form__group">
                <label className="profile-form__label">Created At</label>
                <input
                  name="createdAt"
                  className="profile-form__input"
                  value={formData.createdAt.split("T")[0]}
                  disabled={!isEditing}
                />
              </div>

              <div className="profile-form__group">
                <label className="profile-form__label">is Verified</label>
                <input
                  name="isVerified"
                  className="profile-form__input"
                  value={formData.isVerified}
                  disabled={!isEditing}
                />
              </div>
            </>
          )}

          {activeTab === "security" && (
            <div className="profile-form profile-form--full">
              <div className="profile-form__group">
                <label className="profile-form__label">Current Password</label>
                <input
                  type="password"
                  className="profile-form__input"
                  placeholder="******"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="profile-form__group">
                <label className="profile-form__label">New Password</label>
                <input
                  type="password"
                  className="profile-form__input"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="profile-form__group">
                <label className="profile-form__label">Confirm Password</label>
                <input
                  type="password"
                  className="profile-form__input"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="profile-actions">
                <button
                  className="profile-btn profile-btn--primary"
                  onClick={handleSaveResetPass}
                >
                  Update Password
                </button>
              </div>
            </div>
          )}

          {activeTab === "forgotPass" && (
            <div className="profile-form profile-form--full">
              <div className="profile-form__group">
                <label className="profile-form__label">
                  Lost your password? Enter your email address.
                </label>
                <input
                  type="password"
                  className="profile-form__input"
                  placeholder="******"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProfileCard;
