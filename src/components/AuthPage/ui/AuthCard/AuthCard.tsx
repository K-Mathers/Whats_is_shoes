import { GlassCard } from "../GlassCard/GlassCard";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import "./AuthCard.css";

type AuthCard = {
  type: "login" | "register";
};

const AuthCard: React.FC<AuthCard> = ({ type = "login" }) => {
  const onSubmit = () => {
    try {
      if (type === "login") {
        const res = 0;
      } else {
        const res = 1;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-card">
      <GlassCard>
        <div className="auth-card__wrapper">
          <div className="auth-card__logo">
            <p className="auth-card__logo-text">What Is Shoes?</p>
          </div>

          <form className="auth-card__form" onSubmit={onSubmit}>
            <p className="auth-card__title">
              {type === "login" ? "Login" : "Register"}
            </p>

            <div className="auth-card__field">
              <label htmlFor="email" className="auth-card__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="username@gmail.com"
                className="auth-card__input"
              />
            </div>

            <div className="auth-card__field">
              <label htmlFor="password" className="auth-card__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="auth-card__input"
              />
            </div>

            {type === "register" && (
              <div className="auth-card__field">
                <label htmlFor="confrimPassword" className="auth-card__label">
                  Confrim Password
                </label>
                <input
                  type="password"
                  id="cofrimPassword"
                  placeholder="Password"
                  className="auth-card__input"
                />
              </div>
            )}

            {type === "login" && (
              <div className="auth-card__forgot">
                <a href="/forgot-password" className="auth-card__forgot-link">
                  Forgot Password?
                </a>
              </div>
            )}

            <div className="auth-card__button-wrapper">
              <button type="submit" className="auth-card__button">
                {type === "login" ? "Sign in" : "Sign up"}
              </button>
            </div>

            <div className="auth-card__social">
              <p className="auth-card__social-text">or continue with</p>
            </div>
            <SocialButtons />

            <div className="auth-card__switch">
              {type === "login" ? (
                <>
                  <span className="auth-card__switch-text">
                    Don&apos;t have an account yet?{" "}
                  </span>
                  <a href="/register" className="auth-card__switch-link">
                    Register for free
                  </a>
                </>
              ) : (
                <>
                  <span className="auth-card__switch-text">
                    Already have an account?{""}
                  </span>
                  <a href="/login" className="auth-card__switch-link">
                    Sign in
                  </a>
                </>
              )}
            </div>
          </form>
        </div>
      </GlassCard>
    </div>
  );
};

export default AuthCard;
