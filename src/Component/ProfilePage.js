import React, { useContext } from "react";
import { AccountsContext } from "../Home";
import ProfileHeader from "./ProfileContent/ProfileHeader";
import NoContent from "./ProfileContent/NoContent";
import { Box } from "@mui/material";
import "./styling.css";
import ProfileGrid from "./ProfileContent/ProfileGrid";
import Chatbox from "./Feature component/Chatbox";


const ProfilePage = () => {
  const { changeTab, setChangeTab } =
  useContext(AccountsContext);
  const handleTab = (e) => {
    setChangeTab(e);
  };
  console.log(changeTab)
  return (
    <>
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
        <ProfileHeader />
        {changeTab === 'Profile' ?(
          <ProfileGrid/>
        ):(
          <NoContent/>
        )
        }
      </Box>
      <Chatbox/>
    </Box>
      </>
  );
};
export default ProfilePage;
