import React from "react";
import { Box } from "@mui/material";
import "./ProfileHeader.css";

const ProfileHeader = (props) => {
  return (
    <>
      <Box className="top-bar">
          <h2 id="change-tab">{props.changeTab}</h2>
        <Box className="top-bar-box">
          <img id="profile-image" src={props.account['profilepicture']} />
          <p>{props.account['name']}</p>
        </Box>
      </Box>
    </>
  );
};

export default ProfileHeader;
