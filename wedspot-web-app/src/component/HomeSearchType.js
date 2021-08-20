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
