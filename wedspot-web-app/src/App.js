import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/header";
import { VendorCard, PackageDetailCard } from "./component/Card/card";
import { ImageHeader } from "./component/image-header/imgheader";
import Footer from "./component/footer/footer";
import { FailedMessage } from "./component/alert-message/message";
import Venue from "./component/Card/Venue";
import Banner from "./component/banner/banner";
import ImageCarousel from "./component/carousel/ImageCarousel";
import Package from "./component/Card/Package";
import SimpleSlider from "./component/carousel/VendorCarousel";
// import CarouselComponent from "./component/carousel/VendorCarousel";

function App() {
  return (
    <div className="positon">
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
