import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const TitleBar = ({
  title = "title",
  description,
  showAll = "#",
  margin,
  mt,
  mr,
  ml,
  mb,
}) => {
  return (
    <div
      style={{
        margin: `${margin}`,
        marginTop: `${mt}`,
        marginRight: `${mr}`,
        marginLeft: `${ml}`,
        marginBottom: `${mb}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "3rem",
          }}
        >
          <h1>{title}</h1>
        </div>
        <div
          style={{
            height: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <a
            href={showAll}
            style={{
              color: "#C97C68",
            }}
          >
            Show All
            <NavigateNextIcon />
          </a>
        </div>
      </div>
      <p
        style={{
          color: "#80848D",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleBar;
