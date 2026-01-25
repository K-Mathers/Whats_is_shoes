import { GlassCard } from "../GlassCard/GlassCard";
import "./AuthCard.css";
import { loginUser, registrationUser } from "@/api/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  loginSchema,
  registerSchema,
  type loginSchemaType,
  type registerSchemaType,
} from "@/schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import {
  errorNotification,
  successNotification,
} from "@/utils/notification/notification";
import { useEffect } from "react";
import { useAuth } from "@/components/AuthProvider/AuthContext/AuthContext";

type AuthCard = {
  type: "login" | "register";
};

type FormData = loginSchemaType & Partial<registerSchemaType>;

const AuthCard = ({ type = "login" }: AuthCard) => {
  const navigate = useNavigate();

  const { isAuthenticated, refreshAuth } = useAuth();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(type === "login" ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: FormData) => {
    const isLogin = type === "login";
    const successMsg = isLogin
      ? "Login successful!"
      : "Registration successful!";
    const errorMsg = isLogin ? "Login failed" : "Registration failed.";
    try {
      if (isLogin) {
        await loginUser({ email: data.email, password: data.password });
      } else {
        await registrationUser({
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword!,
        });
      }
      await refreshAuth();
      successNotification(successMsg);
      setTimeout(() => navigate("/profile"), 800);
    } catch (err) {
      errorNotification(errorMsg);
      console.error("Auth err:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth-card">
      <GlassCard>
        <div className="auth-card__wrapper">
          <div className="auth-card__logo">
            <p className="auth-card__logo-text">What Is Shoes?</p>
          </div>

          <form className="auth-card__form" onSubmit={handleSubmit(onSubmit)}>
            <p className="auth-card__title">
              {type === "login" ? "Login" : "Register"}
            </p>

            <div className="auth-card__field">
              <label htmlFor="email" className="auth-card__label">
                Email
              </label>
              <input
                {...formRegister("email")}
                placeholder="username@gmail.com"
                className={`auth-card__input ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <span className="field-error">{errors.email.message}</span>
              )}
            </div>

            <div className="auth-card__field">
              <label htmlFor="password" className="auth-card__label">
                Password
              </label>
              <input
                type="password"
                {...formRegister("password")}
                className={`auth-card__input ${
                  errors.password ? "input-error" : ""
                }`}
                placeholder="Password"
              />
              {errors.password && (
                <span className="field-error">{errors.password.message}</span>
              )}
            </div>

            {type === "register" && (
              <div className="auth-card__field">
                <label htmlFor="confirmPassword" className="auth-card__label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...formRegister("confirmPassword")}
                  className={`auth-card__input ${
                    errors.confirmPassword ? "input-error" : ""
                  }`}
                  placeholder="Repeat Password"
                />
                {errors.confirmPassword && (
                  <span className="field-error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            )}

            {type === "login" && (
              <div className="auth-card__forgot">
                <Link to="/forgot-password" className="auth-card__forgot-link">
                  Forgot Password?
                </Link>
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
                  <Link to="/register" className="auth-card__switch-link">
                    Register for free
                  </Link>
                </>
              ) : (
                <>
                  <span className="auth-card__switch-text">
                    Already have an account?{""}
                  </span>
                  <Link to="/login" className="auth-card__switch-link">
                    Sign in
                  </Link>
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
