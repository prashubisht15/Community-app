import React, { useContext } from "react";
import { AccountsContext } from "../../Home";
import { Box, Modal } from "@mui/material";
import "./ProfileContent.css";
import SignOut from "../Feature component/SignOut";

const ProfileHeader = () => {
  const { selectedAccount, changeTab, setOpen, open } =
    useContext(AccountsContext);
  const account = selectedAccount;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box className="top-bar">
        <h2 id="change-tab">{changeTab}</h2>
        <Box className="top-bar-box" onClick={handleOpen}>
          <img
            id="profile-image"
            src={account["profilepicture"]}
            alt="nothing to show"
          />
          <p>{account["name"]}</p>
        </Box>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <SignOut />
      </Modal>
    </>
  );
};

export default ProfileHeader;
