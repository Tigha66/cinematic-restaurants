import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProfilePanel from "../components/ProfilePanel";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleClose = () => {
    navigate("/dashboard");
  };

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <ProfilePanel onClose={handleClose} />
      </div>
    </div>
  );
};

export default ProfilePage;
