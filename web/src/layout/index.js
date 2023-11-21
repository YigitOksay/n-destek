import React from "react";
import { Outlet } from "react-router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar/index";

import "../styles/main.scss";
function Layout({ children }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Header />
        </Grid>
        <Grid item xs={6} md={2} className="leftContent">
          <SideBar />
        </Grid>
        <Grid item xs={6} md={10}>
          <Box className="outletContent">
            {children}
            <Outlet />
          </Box>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
