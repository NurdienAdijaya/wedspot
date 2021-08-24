import React from "react";
import "./App.css";
// import SignUp from "./component/Quatationform/Request";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/router";
import { VendorCard } from "./component/card/detailcard";
import ExploreBanner from "./component/banner/ExploreBanner";
import SignUp from "./component/Quatationform/register";
import Homepage from "./pages/Homepage";
import Venue from "./component/card/Venue";

function App() {
  const theme = createMuiTheme({
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
      {/* <BrowserRouter>
        <Routers />
      </BrowserRouter> */}
      {/* <VendorCard/>
      <ExploreBanner/>
      <SignUp />
      < Homepage/> */}
      <Venue/>
      < SignUp/>
    </ThemeProvider>
  );
}

export default App;
