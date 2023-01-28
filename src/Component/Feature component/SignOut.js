import React from "react";
import { Box, Button } from "@mui/material";
import { AccountsContext } from "../../Home";
import { useNavigate } from "react-router-dom";
import "./featurebox.css";

const style = {
  position: "absolute",
  top: "30%",
  left: "90%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};
const SignOut = () => {
  const { selectedAccount } = React.useContext(AccountsContext);
  const navigate = useNavigate();

  return (
    <Box className="signout-box" sx={style}>
      <Box className="signout-box-img">
        <img id="signout-img" src={selectedAccount.profilepicture}></img>
      </Box>
      <hr />
      <p className="signout-email">{selectedAccount.email}</p>
      <Button
        variant="contained"
        sx={{
          color: "white",
          backgroundColor: "red",
          borderRadius: "20px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default SignOut;
