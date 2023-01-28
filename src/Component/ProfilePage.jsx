import React, { useContext } from "react";
import { AccountsContext } from "../Home";
import ProfileHeader from "./ProfileContent/ProfileHeader";
import ProfileDetails from "./ProfileContent/ProfileDetails";
import { Box } from "@mui/material";
import "./styling.css";

const ProfilePage = () => {
  const { selectedAccount, changeTab, setChangeTab } =
  useContext(AccountsContext);
  const handleTab = (e) => {
    setChangeTab(e);
  };
  console.log(changeTab)
  return (
    <Box className="Outer-Box">
      <Box className="Navbar">
        <ul className="tab-list">
          <li onClick={()=>handleTab("Profile")}>Profile</li>
          <li onClick={()=>handleTab("Posts")}>Posts</li>
          <li onClick={()=>handleTab("Gallery")}>Gallery</li>
          <li onClick={()=>handleTab("ToDo")}>ToDo</li>
        </ul>
      </Box>
      <Box className="inner-layout">
        <ProfileHeader changeTab={changeTab} account={selectedAccount}/>
        <ProfileDetails account={selectedAccount}/>
      </Box>
    </Box>
  );
};
export default ProfilePage;
