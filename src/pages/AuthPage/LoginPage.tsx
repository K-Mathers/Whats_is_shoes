import Hero from "../HomePage/ui/Hero/Hero";
import AuthCard from "./AuthCard/AuthCard";
import { PageBlockWrapper } from "./PageBlockWrapper/PageBlockWrapper";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#ffffff] to-[#001021] min-h-screen flex flex-col justify-between">
      <Hero />
      <PageBlockWrapper>
        <AuthCard type="login" />
      </PageBlockWrapper>
    </div>
  );
};

export default LoginPage;
