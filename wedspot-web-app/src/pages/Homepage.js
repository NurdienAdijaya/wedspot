import { Button, Grid, InputBase } from "@material-ui/core";
import React from "react";
import Header from "../component/header/header";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import Divider from "@material-ui/core/Divider";

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2MjkyNzk3NTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1540")`,
          backgroundSize: "cover",
          textAlign: "center",
          color: "white",
          height: "450px",
        }}
      >
        <Header background="transparent" />
        <h1
          style={{
            fontSize: "100px",
          }}
        >
          Once in a <br /> life time moments
        </h1>
        <p
          style={{
            fontSize: "16px",
          }}
        >
          Try “Best Wedding Planner” or “Outdoor venue”
        </p>
      </div>
      <div
        style={{
          background: "white",
          alignSelf: "center",
        }}
      >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon
              style={{
                marginBottom: "9px",
              }}
            />
          </Grid>
          <Grid item>
            <InputBase
              placeholder="Try “Best Wedding Planner” or “Outdoor venue”"
              inputProps={{ "aria-label": "naked" }}
              style={{
                margin: "5px",
              }}
            />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item>
            <RoomIcon
              style={{
                marginBottom: "9px",
              }}
            />
          </Grid>
          <Grid item>
            <InputBase
              placeholder="City"
              inputProps={{ "aria-label": "naked" }}
              style={{
                margin: "5px",
              }}
            />
          </Grid>

          <Button
            variant="contained"
            color="secondary"
            style={{ width: "128px", height: "49px" }}
          >
            Search
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Homepage;
