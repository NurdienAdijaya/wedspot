import React from "react";
import Venue from "../card/Venue";
import TitleBar from "../TitleBar";

const HomeVenueBanner = () => {
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
        title={"Garden or Indoor Wedding Party, you name it"}
        description={
          "Look through the most beautiful wedding venues to find the perfect place to host your banquet."
        }
      />
      <Venue overflow="scroll" wrap="nowrap" />
    </div>
  );
};

export default HomeVenueBanner;
