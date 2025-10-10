import { GlassCard } from "../GlassCard/GlassCard";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import "./AuthCard.css";

const AuthCard = () => {
  return (
    <div className="auth-card">
      <GlassCard>
        <div className="auth-card__wrapper">
          <div className="auth-card__logo">
            <p className="auth-card__logo-text">What Is Shoes?</p>
          </div>

          <form className="auth-card__form">
            <p className="auth-card__title">Login</p>

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

            <div className="auth-card__forgot">
              <a href="/forgot-password" className="auth-card__forgot-link">
                Forgot Password?
              </a>
            </div>

            <div className="auth-card__button-wrapper">
              <button type="submit" className="auth-card__button">
                Sign in
              </button>
            </div>

            <div className="auth-card__social">
              <p className="auth-card__social-text">or continue with</p>
            </div>
            <SocialButtons />

            <div className="auth-card__switch">
              <span className="auth-card__switch-text">
                Don&apos;t have an account yet?{" "}
              </span>
              <a href="/register" className="auth-card__switch-link">
                Register for free
              </a>
            </div>
          </form>
        </div>
      </GlassCard>
    </div>
  );
};

export default AuthCard;
