import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { createTheme, ThemeProvider } from "@mui/material";

const THEME = createTheme({
  typography: {
    fontFamily: "Inter",
    fontWeightBold: 800,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
