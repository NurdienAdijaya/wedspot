import React from "react";
import Venue from "../card/Venue";
import TitleBar from "../TitleBar";

const HomeVendorBanner = () => {
  return (
    <div
      style={{
        marginTop: "10rem",
        marginRight: "10rem",
        marginLeft: "10rem",
        marginBottom: "10rem",
      }}
    >
      <TitleBar
        mb={"2rem"}
        title={"Best Planner for You"}
        description={"Handle all the nitty gritties for your big day"}
      />
      <Venue overflow="scroll" wrap="nowrap" />
    </div>
  );
};

export default HomeVendorBanner;
