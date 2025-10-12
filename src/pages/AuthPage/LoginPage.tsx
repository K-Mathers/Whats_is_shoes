import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";
import Hero from "../../components/HomePage/ui/Hero/Hero";
import { PageBlockWrapper } from "../../components/AuthPage/ui/PageBlockWrapper/PageBlockWrapper";
import AuthCard from "../../components/AuthPage/ui/AuthCard/AuthCard";

const LoginPage = () => {
  return (
    <div>
      <Hero backgroundColor="#f05060" />
      <PageBlockWrapper>
        <AuthCard type="login" />
      </PageBlockWrapper>
      <FooterHome />
    </div>
  );
};

export default LoginPage;
