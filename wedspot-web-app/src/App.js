import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Homepage from "./pages/Homepage";

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
      <div>
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
