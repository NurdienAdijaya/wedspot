import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/header";
import { VendorCard, PackageDetailCard } from "./component/Card/card";
import { ImageHeader } from "./component/image-header/imgheader";
import Footer from "./component/footer/footer";
import Venue from "./component/Card/Venue";
import Banner from "./component/banner/banner";
import ImageCarousel from "./component/carousel/ImageCarousel";
import Package from "./component/Card/Package";
import SimpleSlider from "./component/carousel/VendorCarousel";
import { createMuiTheme } from "@material-ui/core";
// import CarouselComponent from "./component/carousel/VendorCarousel";

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
    <div className="positon" theme={theme}>
      <Header />
      < Banner />
      <ImageHeader />
      <Footer />
      <VendorCard />
      <Venue/>
      <Package/>
      <PackageDetailCard />
      < ImageCarousel />
      < SimpleSlider />
    </div>
  );
}

export default App;
