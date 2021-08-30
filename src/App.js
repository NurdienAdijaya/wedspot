import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/router";
import { createTheme } from "@material-ui/core/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#455437",
      },
      secondary: {
        main: "#C97C68",
      },
      grey: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
