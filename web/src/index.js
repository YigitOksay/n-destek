import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./config/router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);
