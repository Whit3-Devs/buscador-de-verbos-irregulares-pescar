import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./assets/mui-theme-config/theme-mui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={themeOptions}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
