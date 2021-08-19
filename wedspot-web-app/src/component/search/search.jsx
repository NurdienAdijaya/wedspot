import React, { useState } from "react";
import { Search, Room } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

function SearchInput() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div style={{ width: "100vw", background: "transparent" }}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="d-flex"
          style={{
            background: "white",
            marginTop: "2.7rem",
            boxShadow: "#80848D 0px 1px 2px",
            width: "52.5rem",
            height: "5rem",
            color: "#80848D",
          }}
        >
          <div className="d-flex align-items-center">
            <div className="me-3">
              <Search style={{ marginLeft: "1.5rem" }} />
            </div>
            <InputBase
              placeholder="Try “Best Wedding Planner” or “Outdoor venue”"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              style={{ width: "18rem", marginRight: "2.5rem" }}
            />
          </div>
          <div
            className="d-flex align-items-center"
            style={{ borderLeft: "#E1E1E1 2px solid", margin: "0.65rem 0" }}
          >
            <div></div>
            <div className="me-3">
              <Room style={{ marginLeft: "2rem" }} />
            </div>
            <InputBase
              placeholder="City"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              style={{ width: "10rem", marginRight: "2.5rem" }}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{
                width: "128px",
                height: "49px",
                margin: "0.65rem",
                marginRight: "1.5rem",
              }}
            >
              search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
