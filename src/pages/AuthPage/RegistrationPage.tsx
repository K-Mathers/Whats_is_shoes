import AuthCard from "../../components/AuthPage/ui/AuthCard/AuthCard";
import { PageBlockWrapper } from "../../components/AuthPage/ui/PageBlockWrapper/PageBlockWrapper";
import Hero from "../../components/HomePage/ui/Hero/Hero";
import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";


const RegistrationPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#002b4e] to-[#001021] min-h-screen flex flex-col justify-between">
      <Hero backgroundColor="#f05060" />
      <PageBlockWrapper>
        <AuthCard type="register" />
      </PageBlockWrapper>
      <FooterHome />
    </div>
  );
};

export default RegistrationPage;
