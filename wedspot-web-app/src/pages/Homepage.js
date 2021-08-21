/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../component/header/header";
import SearchInput from "../component/search/search";
import TitleBar from "../component/TitleBar";
import Venue from "../component/Card/Venue";
import ExploreBanner from "../component/banner/ExploreBanner";
import imgv from "../component/asset/Arista.png";
import HomeSearchType from "../component/HomeSearchType";
import PackageBanner from "../component/banner/PackageBanner";

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
        <Venue />
      </div>
      <ExploreBanner />
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
        <Venue />
      </div>
      <div
        style={{
          borderTop: "2px solid #FDDDC4",
          borderBottom: "2px solid #FDDDC4",
          paddingTop: "6.25rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          height: "30.7rem",
          marginTop: "10rem",
          marginRight: "10rem",
          marginLeft: "10rem",
          marginBottom: "10rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            paddingRight: "11rem",
            paddingLeft: "11rem",
          }}
        >
          Browse a large and growing database of wedding vendors
        </h1>
        <p
          style={{
            fontSize: "16px",
          }}
        >
          We have been collaborated with many great wedding platforms to ensure
          your dream wedding come true
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "10rem",
          marginRight: "10rem",
          marginLeft: "10rem",
          marginBottom: "10rem",
        }}
      >
        <div
          style={{
            margin: "3.5rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "39px",
            }}
          >
            Resourceful wedding directory
          </h1>
        </div>
        <HomeSearchType
          img="https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=455&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2Mjk0NDU4NjM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=620"
          title="Beyond creative works"
          content="Our team hand picks wedding vendors and posts pictures of their
          work to inspire you for your wedding. Find out who the wedding
          vendor(s) are in those wedding photos."
          flexDirection="row"
        />
        <HomeSearchType
          img="https://images.unsplash.com/photo-1562859135-3c009b776595?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=455&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2Mjk0NDYwMTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=620"
          title="Trusted Vendors"
          content="Read trusted reviews from previous clients about a vendor's
          service. Our team looks over every review to make sure the
          reviews are from real clients. Use these online referrals to make a decision which vendor you want to work with."
          flexDirection="row-reverse"
        />
      </div>
      <div>
        <PackageBanner />
      </div>
      asdsdasdasdad
    </div>
  );
};

export default Homepage;
