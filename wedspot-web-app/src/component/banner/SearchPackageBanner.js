import React from "react";
import Package from "../card/Package";
import Button from "@material-ui/core/Button";

const SearchPackageBanner = () => {
  return (
    <div
      style={{
        padding: "0 9.1rem",
        background: "#F8EEE8",
        height: "37.78rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Special Wedding Packages for You</h1>
      <Package overflow="scroll" wrap="nowrap" />
      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="outlined"
          style={{
            color: "#455437",
            borderColor: "#455437",
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

export default SearchPackageBanner;
