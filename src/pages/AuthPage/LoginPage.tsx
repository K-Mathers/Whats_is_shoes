import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";
import Hero from "../../components/HomePage/ui/Hero/Hero";
import { PageBlockWrapper } from "../../components/AuthPage/ui/PageBlockWrapper/PageBlockWrapper";
import AuthCard from "../../components/AuthPage/ui/AuthCard/AuthCard";
import Decorations from "../../components/AuthPage/ui/Decorations/Decorations";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-tr from-[#0085FF] to-[#003465]">
      <Hero backgroundColor="#f05060" />
      <PageBlockWrapper>
        <Decorations />
        <AuthCard type="login" />
      </PageBlockWrapper>
      <FooterHome />
    </div>
  );
};

export default LoginPage;
