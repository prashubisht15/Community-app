import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import axios from "axios";
import "./styling.css";

const MultipleAccount = () => {
  const url = "https://panorbit.in/api/users.json";
  const [allAccount, setAllAccount] = useState([]);
  const performApiCall = async () => {
    try {
      const response = await axios.get(url);
      setAllAccount(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    performApiCall();
  }, []);

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fillOpacity="1"
          d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,181.3C672,192,768,160,864,170.7C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Container maxWidth="sm" className = 'account-container'>
        <h1>Select an account</h1>
        <Box className="account-box">
          {allAccount.map((account, index) => (
            <Box className="account-display" display="flex" sx={{ height: "60px", margin:"5px 10px"}}>
              <img src={account.profilepicture} alt="avatar" />
              <h3>{account.name}</h3>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default MultipleAccount;
