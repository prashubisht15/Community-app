import React, { useContext } from "react";
import Mylocation from "./Mylocation";
import { Box, Grid } from "@mui/material";
import { AccountsContext } from "../../Home";
const ProfileGrid = () => {
  const { selectedAccount } = useContext(AccountsContext);
  const account = selectedAccount;
  return (
    <Grid container sx={{ height: "90%", width: "100%" }} spacing={0}>
      <Grid Item xs={4} sm={4} md={4} className="first-grid">
        <img id="big-profile-photo" src={account.profilepicture} alt="something wrong"/>
        <h4>{account.name}</h4>
        <p>
          <span className="first-part">Username : </span>
          <span className="second-part">
            {"\u00A0\u00A0"}
            {account.username}
          </span>
        </p>
        <p>
          <span className="first-part">e-mail : </span>
          <span className="second-part">
            {"\u00A0\u00A0"}
            {account.email}
          </span>
        </p>
        <p>
          <span className="first-part">Phone no : </span>
          <span className="second-part">
            {"\u00A0\u00A0"}
            {account.phone}
          </span>
        </p>
        <p>
          <span className="first-part">Website : </span>
          <span className="second-part">
            {"\u00A0\u00A0"}
            {account.website}
          </span>
        </p>
        <hr />
        <h4 className="company">Company</h4>
        <p>
          <span className="first-part">Name :</span>
          <span className="second-part">
            {"\u00A0\u00A0"}
            {account.company.name}
          </span>
        </p>
        <p>
          <span className="first-part">catchPhrase :</span>
          <span className="second-part">
            {"\u00A0\u00A0"}
            {account.company.catchPhrase}
          </span>
        </p>
        <p>
          <span className="first-part">bs :</span>
          <span className="second-part">
            {"\u00A0\u00A0"}
            {account.company.bs}
          </span>
        </p>
      </Grid>
      <Grid Item xs={8} sm={8} md={8}>
        <Box
          sx={{
            borderLeft: "1px rgb(205, 204, 204) solid",
            marginTop: "40px",
            paddingLeft: "20px",
          }}
        >
          <h4 className="address">Address :</h4>
          <Box sx={{ marginLeft: "50px" }}>
            <p className="address-details">
              <span className="first-part">Street :</span>
              <span className="second-part">
                {"\u00A0\u00A0"}
                {account.address.street}
              </span>
            </p>
            <p className="address-details">
              <span className="first-part">Suite : </span>
              <span className="second-part">
                {"\u00A0\u00A0"} {account.address.suite}
              </span>
            </p>
            <p className="address-details">
              <span className="first-part">City : </span>
              <span className="second-part">
                {"\u00A0\u00A0"}
                {account.address.city}
              </span>
            </p>
            <p className="address-details">
              <span className="first-part">Zipcode : </span>
              <span className="second-part">
                {"\u00A0\u00A0"}
                {account.address.zipcode}
              </span>
            </p>
            <div className="geomap">
              <Mylocation
                lat={account.address.geo.lat}
                lng={account.address.geo.lng}
              />
            </div>
            <p>
              <span>
                lat:{"\u00A0\u00A0"}
                {account.address.geo.lat}
                {"\u00A0\u00A0"}
              </span>
              <span>
                long:{"\u00A0\u00A0"}
                {account.address.geo.lng}
              </span>
            </p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileGrid;
