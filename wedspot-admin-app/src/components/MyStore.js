import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import TitleStore1 from "./title/TitleStore1";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const MyStore = () => {
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          margin: "0.55rem 0",
        }}
      >
        <Link color="inherit" href="/store" onClick={handleClick}>
          My Store
        </Link>
        <Link color="inherit" href="/store/edit/" onClick={handleClick}>
          Edit
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <div
        style={{
          background: "white",
          border: "solid 1px #E1E1E1",
          padding: "1.7rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div>
            <TitleStore1
              title="Store Header"
              detail="The image must have the ratio of 1:3"
            />
            <div
              style={{
                border: "solid 1px black",
              }}
            >
              <h1>kotak foto</h1>
            </div>
          </div>
          <div>
            <TitleStore1
              title="Store Avatar"
              detail="The image must have the ratio of 1:1"
            />
            <div
              style={{
                border: "solid 1px black",
              }}
            >
              <h1>kotak foto</h1>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: " 1.7rem 0",
          }}
        >
          <h3>Contact Details</h3>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyStore;
