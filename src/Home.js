import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import MultipleAccount from "./Component/MultipleAccount";
import ProfilePage from "./Component/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AccountsContext = createContext();
const Home = () => {
  const url = "https://panorbit.in/api/users.json";
  const [selectedAccount, setSelectedAccount] = useState({});
  const [allAccount, setAllAccount] = useState([]);
  const [changeTab, setChangeTab] = useState("Profile");
  const [open, setOpen] = useState(false);
  
  
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
    <>
      <Router>
        <AccountsContext.Provider
          value={{
            allAccount,
            selectedAccount,
            setSelectedAccount,
            changeTab,
            setChangeTab,
            open,
            setOpen
          }}
        >
          <Routes>
            <Route path="/" element={<MultipleAccount />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </AccountsContext.Provider>
      </Router>
    </>
  );
};

export default Home;
export { AccountsContext };
