import React from "react";
import Header from "../component/header/header";
import SearchInput from "../component/search/search";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TitleBar from "../component/TitleBar";
import Venue from "../component/Card/Venue";

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2MjkyNzk3NTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1540")`,
          backgroundSize: "cover",
          textAlign: "center",
          height: "450px",
          zIndex: "-1",
        }}
      >
        <Header background="transparent" />
        <h1
          style={{
            fontSize: "100px",
            color: "white",
            textShadow: "#80848D 0px 0px 5px",
          }}
        >
          Once in a<br />
          life time moments
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "white",
            textShadow: "#80848D 0px 0px 5px",
          }}
        >
          Try “Best Wedding Planner” or “Outdoor venue”
        </p>
        <SearchInput />
      </div>
      <div
        style={{
          marginTop: "10rem",
          marginRight: "10rem",
          marginLeft: "10rem",
          marginBottom: "2rem",
        }}
      >
        <TitleBar
          mb={"2rem"}
          title={"Garden or Indoor Wedding Party, you name it"}
          description={
            "Look through the most beautiful wedding venues to find the perfect place to host your banquet."
          }
        />
        <Venue />
      </div>
    </div>
  );
};

export default Homepage;
