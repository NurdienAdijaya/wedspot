/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import frame from "../../assets/Frame.png";
import Package from "../card/Package";

const PackageBanner = () => {
  return (
    <div
      style={{
        backgroundColor: "#D19072",
        height: "615px",
        position: "relative",
      }}
    >
      <img
        src={frame}
        height="615px"
        style={{
          float: "left",
          zIndex: "0",
          position: "absolute",
        }}
      />
      <div
        style={{
          padding: "4.75rem",
        }}
      >
        <h1>Special Wedding Packages for You</h1>
        <Package />
      </div>
    </div>
  );
};

export default PackageBanner;
