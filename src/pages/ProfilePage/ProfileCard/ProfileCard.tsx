import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import { getUser } from "@/api/auth";

const ProfileCard = () => {
  const [user, setUser] = useState<{ email: string }>({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = async () => {
      try {
        setIsLoading(true);
        const data = await getUser();
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    userData();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="profile-card">
      <div className="profile-card__wrapper">
        <div className="profile-logo__card">
          <p>Welcome, {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
