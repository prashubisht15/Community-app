import React, { useContext } from "react";
import { AccountsContext } from "../Home";
import ProfileHeader from "./ProfileHeader";
import { Box } from "@mui/material";
import "./styling.css";

const ProfilePage = () => {
  const { selectedAccount, changeTab, handleTab } =
  useContext(AccountsContext);
  return (
    <Box className="Outer-Box">
      <Box className="Navbar">
        <ul>
          <li onClick={handleTab("Profile")}>Profile</li>
          <li onClick={handleTab("Posts")}>Posts</li>
          <li onClick={handleTab("Gallery")}>Gallery</li>
          <li onClick={handleTab("ToDo")}>ToDo</li>
        </ul>
      </Box>
      <ProfileHeader changeTab={changeTab} image={selectedAccount.profilepicture}/>
    </Box>
  );
};
export default ProfilePage;
