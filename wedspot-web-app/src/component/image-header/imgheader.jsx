import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  size: {
    backgroundImage: `url(${"https://source.unsplash.com/1440x420/?wedding,hall"})`,
    backgroundSize: "cover",
    color: "white",
  },
  tittle: {
    height: "420px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function ImageHeader() {
  const classes = useStyles();
  return (
    <div className={classes.size}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          search result
        </Link>
        <Link color="inherit" href="/">
          type
        </Link>
        <Typography color="textPrimary">nama vendor</Typography>
      </Breadcrumbs>
      <div className={classes.tittle}>
        <h1>Nama Vendor</h1>
      </div>
    </div>
  );
}

export default ImageHeader;
