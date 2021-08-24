import React, { useEffect, useState } from "react";
import Venue from "../card/Venue";
import TitleBar from "../TitleBar";
import axios from "axios";

const HomeVenueBanner = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

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
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflow: "scroll",
        }}
      >
        {data.map((data) => (
          <div className="ps-3">
          <Venue
            image={data.image_poster}
            title={data.title}
            location={data.location}
            rating={data.rating}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeVenueBanner;
