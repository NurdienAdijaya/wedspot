/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ExploreBanner from "../component/banner/ExploreBanner";
import PackageBanner from "../component/banner/PackageBanner";
import MobileDownloadBanner from "../component/banner/MobileDownloadBanner";
import HomeHeaderBanner from "../component/banner/HomeHeaderBanner";
import HomeVenueBanner from "../component/banner/HomeVenueBanner";
import HomeVendorBanner from "../component/banner/HomeVendorBanner";
import VendorListBanner from "../component/banner/VendorListBanner";
import WebContentInfo from "../component/WebContentInfo";
import Footer from "../component/footer/footer";

const Homepage = () => {
  return (
    <div>
      <HomeHeaderBanner />
      <HomeVenueBanner />
      <ExploreBanner />
      <HomeVendorBanner />
      <VendorListBanner />
      <WebContentInfo />
      <PackageBanner />
      <MobileDownloadBanner />
      <Footer background="#EBDFD6" color="#0F120D" logoColor="#F8EEE8" />
    </div>
  );
};

export default Homepage;
