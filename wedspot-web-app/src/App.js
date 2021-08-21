import React from "react";
import "./App.css";
import SignUp from "./component/Quatationform/Request";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import Routers from "./routes/router";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#455437",
      },
      secondary: {
        main: "#C97C68",
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
