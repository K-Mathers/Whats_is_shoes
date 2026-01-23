import { getUser, sendCode, verifyCode } from "@/api/auth";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { IFormData } from "../../type/types";

interface IVerifEmailPage {
  activeTab: string;
  verifStep: number;
  setVerifStep: Dispatch<SetStateAction<number>>;
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}

const VerifEmailPage = ({
  activeTab,
  verifStep,
  setVerifStep,
  formData,
  setFormData,
}: IVerifEmailPage) => {
  const [verifCode, setVerifCode] = useState("");

  const handleSendVerifCode = async () => {
    try {
      await sendCode({ email: formData.email });
      setVerifStep(2);
    } catch (err) {
      console.error(err);
    }
  };

  const handleVerifyEmailConfirm = async () => {
    try {
      await verifyCode({ email: formData.email, code: verifCode });
      setVerifStep(1);
      const data = await getUser();
      setFormData(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {activeTab === "verifEmail" && (
        <div className="profile-form profile-form--full animate-fade-in">
          {verifStep === 1 ? (
            <>
              <div className="profile-form__group">
                <label className="profile-form__label">Verify Your Email</label>
                <p className="profile-form__text">
                  {formData.isVerified ? "Verified" : "Not Verified"}
                </p>
                <input
                  className="profile-form__input"
                  value={formData.email}
                  disabled
                />
              </div>
              {!formData.isVerified && (
                <div className="profile-actions">
                  <button
                    className="profile-btn profile-btn--primary"
                    onClick={handleSendVerifCode}
                  >
                    Send Verification Code
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="profile-form__group">
                <label className="profile-form__label">Enter Code</label>
                <input
                  className="profile-form__input"
                  placeholder="123456"
                  value={verifCode}
                  onChange={(e) => setVerifCode(e.target.value)}
                />
              </div>
              <div className="profile-actions">
                <button
                  className="profile-btn profile-btn--primary"
                  onClick={handleVerifyEmailConfirm}
                >
                  Verify Now!
                </button>
                <button className="profile-btn" onClick={() => setVerifStep(1)}>
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifEmailPage;
