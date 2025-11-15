import AuthCard from "../../components/AuthPage/ui/AuthCard/AuthCard";
import { PageBlockWrapper } from "../../components/AuthPage/ui/PageBlockWrapper/PageBlockWrapper";
import Hero from "../../components/HomePage/ui/Hero/Hero";
import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";
import Decorations from "../../components/AuthPage/ui/Decorations/Decorations";

const RegistrationPage = () => {
  return (
    <div className="bg-gradient-to-tr from-[#0085FF] to-[#003465]">
      <Hero backgroundColor="#f05060" />
      <PageBlockWrapper>
        <Decorations/>
        <AuthCard type="register" />
      </PageBlockWrapper>
      <FooterHome />
    </div>
  );
};

export default RegistrationPage;
