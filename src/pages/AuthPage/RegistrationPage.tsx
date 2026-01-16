import { PageBlockWrapper } from "./PageBlockWrapper/PageBlockWrapper";
import AuthCard from "./AuthCard/AuthCard";
import Hero from "../HomePage/ui/Hero/Hero";

const RegistrationPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#ffffff] to-[#001021] min-h-screen flex flex-col justify-between">
      <Hero />
      <PageBlockWrapper>
        <AuthCard type="register" />
      </PageBlockWrapper>
    </div>
  );
};

export default RegistrationPage;
