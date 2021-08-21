import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./component/header/header";
// import { VendorCard, PackageDetailCard } from "./component/Card/detailcard";
// import { ImageHeader } from "./component/image-header/imgheader";
// import Footer from "./component/footer/footer";
// import Venue from "./component/Card/Venue";
// import ImageCarousel from "./component/carousel/ImageCarousel";
// import Package from "./component/Card/Package";
// import SimpleSlider from "./component/carousel/VendorCarousel";
import { createMuiTheme } from "@material-ui/core";
import BasicTextFields from "./component/Quatationform/Request";
import MultilineTextFields from "./component/Quatationform/Request";
import SignUp from "./component/Quatationform/Request";
// import Homepage from "./pages/Homepage";
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
      {/* < Homepage />
      <Header />
      <ImageHeader />
      <Footer />
      <VendorCard />
      <Venue/>
      <Package/>
      <PackageDetailCard />
      < ImageCarousel />
      < SimpleSlider />
      < Package /> */}
      {/* < BasicTextFields/> */}
      {/* < MultilineTextFields /> */}
      < SignUp />
    </div>
  );
}

export default App;
