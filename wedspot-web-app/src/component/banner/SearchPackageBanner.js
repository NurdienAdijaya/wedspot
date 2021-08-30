import React, { useEffect, useState } from "react";
import Package from "../card/Package";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchPackageBanner = (datas) => {
  // const [data, setData] = useState([]);
  // const getData = () => {
  //   axios
  //     .get("http://localhost:4000/data")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  console.log(datas);
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
          overflowY:"hidden"
        }}
      >
        {datas?.data?.map((data) => (
          <Link
            to={`/package/${data.package_id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Package
              image={data.package_album[0]}
              title={data.package_name}
              price={data.package_price}
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
        <Link to="searchdetail/packages" style={{ textDecoration: "none" }}>
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
        </Link>
      </div>
    </div>
  );
};

export default SearchPackageBanner;
