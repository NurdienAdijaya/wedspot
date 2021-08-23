/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import frame from "../../assets/Frame.png";
import Package from "../card/Package";
import Button from "@material-ui/core/Button";

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
          paddingTop: "4.75rem",
          paddingLeft: "4.75rem",
          paddingRight: "4.75rem",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
          }}
        >
          Special Wedding Packages for You
        </h1>
        <Package overflow="scroll" wrap="nowrap" />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="outlined"
          style={{
            color: "white",
            borderColor: "white",
            width: "262px",
            height: "55px",
          }}
        >
          Browse All The Packages
        </Button>
      </div>
    </div>
  );
};

export default PackageBanner;
