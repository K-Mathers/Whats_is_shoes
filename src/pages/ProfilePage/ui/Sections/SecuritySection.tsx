import { changePassword } from "@/api/auth";
import type { IPasswordData } from "../../type/types";

interface ISecurityPage {
  activeTab: string;
  passwordData: IPasswordData;
  setPasswordData: React.Dispatch<React.SetStateAction<IPasswordData>>;
}

const SecurityPage = ({
  activeTab,
  passwordData,
  setPasswordData,
}: ISecurityPage) => {
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
    <div>
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
    </div>
  );
};

export default SecurityPage;
