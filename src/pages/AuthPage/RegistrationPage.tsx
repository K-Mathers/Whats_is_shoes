import AuthCard from "../../components/AuthPage/ui/AuthCard/AuthCard";
import { PageBlockWrapper } from "../../components/AuthPage/ui/PageBlockWrapper/PageBlockWrapper";
import Hero from "../../components/HomePage/ui/Hero/Hero";
import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";

const RegistrationPage = () => {
  return (
    <div>
      <Hero backgroundColor="#f05060" />
      <PageBlockWrapper>
        <AuthCard type="register" />
      </PageBlockWrapper>
      <FooterHome />
    </div>
  );
};

export default RegistrationPage;
