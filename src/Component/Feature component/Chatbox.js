import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { AccountsContext } from "../../Home";
import ForumIcon from "@mui/icons-material/Forum";
import "./featurebox.css";

const Chatbox = () => {
  const [isActive, setIsActive] = useState(true);
  const { allAccount } = useContext(AccountsContext);
  function toggleActive() {
    setIsActive(!isActive);
  }

  return (
    <>
      <Box maxWidth="xs" className={`${isActive ? "" : "open"} chat-container`}>
        <div onClick={toggleActive} className="chat-actions">
          <h1 className="chat-header">Chats</h1>
          <ForumIcon style={{ color: "white" }} />
        </div>
        <Box className={`${isActive ? "" : "open"} chat-box`}>
          {allAccount.map((account, id) => (
            <Box
              className="chat-display"
              display="flex"
              sx={{ height: "33px", margin: "5px 5px" }}
              key={account.id}
            >
              <div className="credential">
                <img
                  className="chat-img"
                  src={account.profilepicture}
                  alt="avatar"
                />
                <h3 className="chat-name">{account.name}</h3>
              </div>
              <span
                className={`${
                  id % 2 === 0 ? "online" : "offline"
                } online-offline`}
              ></span>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Chatbox;
