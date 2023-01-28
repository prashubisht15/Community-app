import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AccountsContext } from "../Home";
import { useNavigate } from "react-router-dom";
import "./styling.css";

const MultipleAccount = () => {
  const navigate = useNavigate();
  const { allAccount, setSelectedAccount, setOpen, setChangeTab } = useContext(AccountsContext);
  const handleSelect = (account) => {
    setSelectedAccount(account);
    setOpen(false)
    setChangeTab('Profile');
    navigate(`/profile/`);
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fillOpacity="1"
          d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,181.3C672,192,768,160,864,170.7C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Box maxWidth="xs" className="account-container">
        <h1 id="select">Select an account</h1>
        <Box className="account-box">
          {allAccount.map((account) => (
            <Box
              className="account-display"
              display="flex"
              key={account.id}
              sx={{ height: "35px", margin: "5px 25px" }}
              onClick={() => handleSelect(account)}
            >
              <img id="profile-img" src={account.profilepicture} alt="avatar" />
              <h3 id="profile-name">{account.name}</h3>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default MultipleAccount;
