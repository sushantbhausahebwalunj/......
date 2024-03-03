import React from "react";
// import Header2 from './Header2'
// import Footer2 from "./Footer2";
// import Profile from "./Profile";
import { Link } from "react-router-dom";
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { FaUserCircle } from "react-icons/fa";
// import MyComponent from "./MyComponent";

import { useState } from "react";

export default function SidebarProfile() {
  return (
    <Box>
      {/* <Header2/> */}
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={2}>
          <List>
            <ListItem>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography variant="h6">Profile</Typography>
              </Link>
            </ListItem>
            {/* ...repeat for other list items... */}
            <ListItem>
              <Link to="/logout" style={{ textDecoration: 'none' }}>
                <Typography variant="h6">Logout</Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={7}>
          {/* <Profile /> */}
        </Grid>
        <Grid item xs={3}>
          <Box textAlign="center">
            <FaUserCircle
              style={{
                width: "8rem",
                height: "8rem",
                borderRadius: "50%",
                backgroundColor: "grey",
                marginTop: "1.9rem",
                display:"inline-block"
              }}
            />
            <Typography variant="h6" style={{ marginLeft: ".7rem" }}>KodeZera</Typography>
          </Box>
          <Box
            style={{
              width: "7.5rem",
              height: "6rem",
              borderRadius: "50%",
              backgroundColor: "grey",
              marginTop: "2rem",
              marginLeft:"6rem",
              display: "flex",
              justifyContent: "center",
              alignItems:"center"
            }}
          >
            <Typography variant="subtitle1">Streak 4 days</Typography>
          </Box>
        </Grid>
        <Grid item xs={10} style={{ marginTop: "-300px" }}>
          <hr />
          {/* <MyComponent /> */}
        </Grid>
      </Grid>
      {/* <Footer2/> */}
    </Box>
  );
}