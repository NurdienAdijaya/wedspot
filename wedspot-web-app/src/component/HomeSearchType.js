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
      }}
    >
      <div
        style={{
          maxWidth: "50%",
        }}
      >
        <img src={img} />
      </div>
      <div
        style={{
          width: "50%",
          padding: "0 7rem",
          alignSelf: "center",
        }}
      >
        <h1>{title}</h1>
        <p>{content}</p>
        <ButtonPrimary content="Search" width="157px" />
      </div>
    </div>
  );
};

export default HomeSearchType;
