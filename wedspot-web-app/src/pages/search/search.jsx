import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Container, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import SimpleMenu from "../../component/dropdown/dropdown";

const useStyles = makeStyles((theme) => ({
  root:{
      height:"10px"
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
          <Link color="inherit" href="/">
            type
          </Link>
          <Typography color="white">nama vendor</Typography>
        </Breadcrumbs>
        <h1>Venue</h1>
        <Divider variant="middle" />
        <div>
            <SimpleMenu/>
        </div>
      </Container>
    </div>
  );
}

export default SearchPage;
