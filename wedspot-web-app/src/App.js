import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import PackageDetail from "./pages/vendor/package";

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
      <div >
        <Header />
        <PackageDetail/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
