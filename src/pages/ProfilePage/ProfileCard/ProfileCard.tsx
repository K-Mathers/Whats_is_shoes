import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import { getUser } from "@/api/auth";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    createdAt: "",
    isVerified: "",
  });

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
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, []);

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
      </aside>

      <main className="profile-content">
        <div className="profile-card">
          <div className="profile-card__header">
            <h2 className="profile-card__title">
              {activeTab === "general" ? "Profile" : "Settings"}
            </h2>
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
                  name="currentPassword"
                  className="profile-form__input"
                  placeholder="******"
                  // onChange={handleInputChange}
                />
              </div>

              <div className="profile-form__group">
                <label className="profile-form__label">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  className="profile-form__input"
                  // onChange={handleInputChange}
                />
              </div>

              <div className="profile-form__group">
                <label className="profile-form__label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="profile-form__input"
                  // onChange={handleInputChange}
                />
              </div>

              <div className="profile-actions">
                <button
                  className="profile-btn profile-btn--primary"
                  // onClick={handleSave}
                >
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProfileCard;
