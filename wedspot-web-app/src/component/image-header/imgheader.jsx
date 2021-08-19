import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: "white",
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
      <Container className="pt-3">
        <Breadcrumbs
          aria-label="breadcrumb"
          className={classes.bread}
          classes={{
            root: classes.root,
          }}
        >
          <Link color="inherit" href="/">
            <p>search result</p>
          </Link>
          <Link color="inherit" href="/">
            type
          </Link>
          <Typography color="white" className={classes.cormorant}>
            nama vendor
          </Typography>
        </Breadcrumbs>
      </Container>
      <div className={classes.tittle}>
        <Typography variant="h1" component="h2">
          Nama Vendor
        </Typography>
      </div>
    </div>
  );
}

export default ImageHeader;
