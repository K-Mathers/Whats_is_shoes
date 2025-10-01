import React from "react";
import { PageBlockWrapper } from "../../components/LoginPage/ui/PageBlockWrapper/PageBlockWrapper";
import AuthCard from "../../components/LoginPage/ui/AuthCard/AuthCard";
import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";
import Hero from "../../components/HomePage/ui/Hero/Hero";

const LoginPage = () => {
  return (
    <div>
      <Hero />
      <PageBlockWrapper>
        <AuthCard />
      </PageBlockWrapper>
      <FooterHome />
    </div>
  );
};

export default LoginPage;
