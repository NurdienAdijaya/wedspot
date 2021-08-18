import React, { useState } from "react";
import { Search, Room } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

function SearchInput() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div>
      <form>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <Divider variant="middle" orientation="vertical" flexitem />
          <div className="d-flex align-items-center">
            <div className="me-3">
              <Room />
            </div>
            <InputBase
              placeholder="location..."
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
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
