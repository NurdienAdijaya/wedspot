import React from "react";
import HomeSearchBanner from "../../component/banner/HomeSearchBanner";
import SearchPackageBanner from "../../component/banner/SearchPackageBanner";
import Venue from "../../component/card/Venue";
import Footer from "../../component/footer/footer";
import SearchTitle from "../../component/search/SearchTitle";
import TitleBar from "../../component/TitleBar";

const HomeSearch = () => {
  return (
    <div>
      <HomeSearchBanner />
      <SearchTitle />
      <SearchPackageBanner />
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Venue" />
        <Venue overflow="scroll" wrap="nowrap" />
      </div>
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Wedding Organizer" />
        <Venue overflow="scroll" wrap="nowrap" />
      </div>
    </div>
  );
};

export default HomeSearch;
