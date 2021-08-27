import React, { useEffect, useState } from "react";
import Package from "../card/Package";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchPackageBanner = () => {
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
        padding: "0 9.1rem",
        background: "#F8EEE8",
        height: "37.78rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Cormorant",
          fontWeight: "600",
        }}
      >
        Special Wedding Packages for You
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflow: "scroll",
        }}
      >
        {data.map((data) => (
          <Link
            to={`/package/${data.id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Package
              image={data.poster_path}
              title={data.name}
              price={data.price}
              data={data}
              height="330px"
            />
          </Link>
        ))}
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
