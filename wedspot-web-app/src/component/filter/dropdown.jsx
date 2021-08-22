import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { Person, AttachMoney, Layers } from "@material-ui/icons";
import { TextField, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "50px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  inputPrice: {
    width: "80px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  toggle: {
    width: "314px",
    textAlign: "start",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  togglepax: {
    width: "256px",
    textAlign: "start",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    display: "flex",
    alignItems: "first baseline",
  },
}));

export function DropdownPax() {
  const classes = useStyles();
  const [minpax, setMinpax] = useState("0");
  const [maxpax, setMaxpax] = useState("10000");
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <Person className="me-2" />
        {minpax} - {maxpax} pax
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Container>
          <form className="d-flex flex-column mt-2 mb-3">
            <div className={classes.form}>
              <TextField
                id="standard-search"
                type="search"
                value={minpax}
                onChange={(e) => {
                  setMinpax(e.target.value);
                }}
                className={classes.input}
              />
              <p>pax</p>

              <p className="ms-3 me-1">-</p>
              <TextField
                id="standard-search"
                type="search"
                value={maxpax}
                onChange={(e) => {
                  setMaxpax(e.target.value);
                }}
                className={classes.input}
              />
              <p>pax</p>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4"
            >
              Ok
            </Button>
          </form>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function DropdownPrice() {
  const classes = useStyles();
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("100000000");
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light">
          <AttachMoney className="me-2" />
          {minPrice} - {maxPrice} pax
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Container>
            <form className="d-flex flex-column mt-2 mb-3">
              <div className={classes.form}>
                <p>Rp.</p>
                <TextField
                  id="standard-search"
                  type="search"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                  className={classes.inputPrice}
                />
                <p className="ms-3 me-3">-</p>
                <p>Rp.</p>
                <TextField
                  id="standard-search"
                  type="search"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                  }}
                  className={classes.inputPrice}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mt-4"
              >
                Ok
              </Button>
            </form>
          </Container>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export function DropdownType() {
  const [venue, setVenue] = useState(true);
  const [wo, setWo] = useState(true);
  console.log(venue, wo);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <Layers className="me-2" />
        All Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Container>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={venue}
                    onChange={(e) => {
                      setVenue(e.target.checked);
                    }}
                  />
                }
                label="Venue"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={wo}
                    onChange={(e) => {
                      setWo(e.target.checked);
                    }}
                  />
                }
                label="Wedding Organizer"
              />
            </FormGroup>
          </FormControl>
          <div className="d-flex flex-column">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4"
            >
              Ok
            </Button>
          </div>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}
