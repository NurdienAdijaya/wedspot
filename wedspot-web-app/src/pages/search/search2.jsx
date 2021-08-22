import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Container, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import {
  DropdownPax,
  DropdownPrice,
  DropdownType,
} from "../../component/filter/dropdown";

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
  },
}));

function SearchPage() {
  const classes = useStyles();
  return (
    <div>
      <Container className="pb-5 pt-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            <p>search result</p>
          </Link>
          <Typography color="white">type</Typography>
        </Breadcrumbs>
        <h1>Venue</h1>
        <div className={classes.filter}>
          <DropdownType />
          <DropdownPax />
          <DropdownPrice />
        </div>
      </Container>
    </div>
  );
}

export default SearchPage;
