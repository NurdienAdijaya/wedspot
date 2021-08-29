import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import {
  DropdownPax,
  DropdownPrice,
  DropdownType,
  DropdownCity,
} from "../../component/filter/dropdown";
import { Grid } from "@material-ui/core";
import Package from "../../component/card/Package";
import Venue from "../../component/card/Venue";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "10px",
  },
  filter: {
    paddingTop: "10px",
    paddingBottom: "10px",
    borderTop: "#E1E1E1 2px solid",
    borderBottom: "#E1E1E1 2px solid",
    display: "flex",
    margin: "10px",
  },
}));

function SearchPage() {
  const classes = useStyles();
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
    <div>
      <Container className="pb-5 pt-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            <p>search result</p>
          </Link>
          <Typography color="white">type</Typography>
        </Breadcrumbs>
        <h1 className="pt-3 pb-3">Venue</h1>
        <div className={classes.filter}>
          <div>
            <DropdownType />
          </div>
          <div className="ms-3">
            <DropdownCity />
          </div>
          <div className="ms-3">
            <DropdownPax />
          </div>
          <div className="ms-3">
            <DropdownPrice />
          </div>
        </div>
        <div className="pt-5 pb-3">
          <h3>Showing All (jumlah result) packages</h3>
        </div>
        <Grid container spacing={3}>
          {data.map((data) => (
            <Grid item xs={4}>
              <Venue
                image={data.image_poster}
                title={data.title}
                location={data.location}
                rating={data.rating}
              />
            </Grid>
          ))}
        </Grid>
        <Package />
      </Container>
    </div>
  );
}

export default SearchPage;