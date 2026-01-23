import { useState } from "react";
import type { IFormData } from "../../type/types";

interface IGeneralPage {
  activeTab: string;
  formData: IFormData;
}

const GeneralPage = ({ activeTab, formData }: IGeneralPage) => {
  const [isEditing] = useState(false);

  return (
    <div>
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
    </div>
  );
};

export default GeneralPage;
