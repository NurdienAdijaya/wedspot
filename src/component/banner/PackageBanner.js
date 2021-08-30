/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import frame from "../../assets/Frame.png";
import Package from "../card/Package";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { getPackageHome } from "../../store/action/package";

const PackageBanner = () => {
  const dispatch = useDispatch();
  const { packages, isLoading } = useSelector(
    (state) => state.packages.listPackageExample
  );

  useEffect(() => {
    dispatch(getPackageHome());
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundColor: "#D19072",
        height: "615px",
        position: "relative",
      }}
    >
      <img
        src={frame}
        height="615px"
        style={{
          float: "left",
          zIndex: "0",
          position: "absolute",
        }}
      />
      <div
        style={{
          paddingTop: "4.75rem",
          paddingLeft: "4.75rem",
          paddingRight: "4.75rem",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
            fontFamily: "Cormorant",
          }}
        >
          Special Wedding Packages for You
        </h1>
        {isLoading ? (
          <div style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "scroll",
            }}
          >
            {packages?.data?.map((data, index) => (
              <Link
                key={index}
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
        )}
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
              color: "white",
              borderColor: "white",
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

export default PackageBanner;
