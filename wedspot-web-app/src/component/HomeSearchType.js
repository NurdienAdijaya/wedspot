/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";

const HomeSearchType = ({
  flexDirection = "row",
  title = "title",
  content = "content",
  img = "img",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: `${flexDirection}`,
        width: "100%",
      }}
    >
      <div style={{ width: "50%" }}>
        <img src={img} width="100%" />
      </div>
      <div
        style={{
          alignSelf: "center",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          padding: "0 5%",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "1rem",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "1rem",
          }}
        >
          {content}
        </p>
        <ButtonPrimary content="Search" width="157px" />
      </div>
    </div>
  );
};

export default HomeSearchType;
