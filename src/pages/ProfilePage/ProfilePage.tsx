import FooterHome from "../HomePage/ui/Footer/FooterHome";
import Hero from "../HomePage/ui/Hero/Hero";
import ProfileCard from "./ProfileCard/ProfileCard";

const ProfilePage = () => {
  return (
    <div className="">
      <Hero backgroundColor="#757575d0" />
      <ProfileCard />
      <FooterHome />;
    </div>
  );
};

export default ProfilePage;
