import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/header";
import { VendorCard, PackageDetailCard } from "./component/card/card";
import { ImageHeader } from "./component/image-header/imgheader";
import Footer from "./component/footer/footer";
import { FailedMessage } from "./component/alert-message/message";

function App() {
  return (
    <div className="positon">
      <Header />
      <ImageHeader />
      <Footer />
      <VendorCard />
      <PackageDetailCard />
    </div>
  );
}

export default App;
