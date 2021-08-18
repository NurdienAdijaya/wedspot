import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/header";
import { VendorCard, PackageDetailCard } from "./component/card/card";
import { ImageHeader } from "./component/image-header/imgheader";
import Footer from "./component/footer/footer";
import { FailedMessage } from "./component/message/message";
import SearchInput from './component/search/search'

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
        <ImageHeader /><SearchInput/>
        <Footer />
        <VendorCard />
        <PackageDetailCard />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
