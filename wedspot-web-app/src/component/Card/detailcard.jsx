import React,{ useState} from "react";
import Card from "@material-ui/core/Card";
import {
  Room,
  Person,
  AttachMoney,
  Phone,
  Mail,
  Language,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Rating from "@material-ui/lab/rating";
import facebook from "./icon/facebook.png";
import twitter from "./icon/twitter.png";
import instagram from "./icon/instagram.png";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  hr: {
    maxHeight: "1em",
  },
  text: {
    fontSize: "1em",
  },
  logo: {
    display: "flex",
  },
  btn: {
    width: "inherit",
    height: "55px",
  },
}));

export function VendorCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<h1>foto</h1>}
          title={<h4>Nama Vendor</h4>}
          subheader={<Rating name="read-only" value="3" readOnly />}
        />
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>
            <Room />
            (Lokasi)
          </p>
          <p className={classes.text}>
            <Person />
            (min) - (max) pax
          </p>
          <p className={classes.text}>
            <AttachMoney />
            start from Rp(harga)
          </p>
        </CardContent>
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>
            <Phone />
            (nomor hp)
          </p>
          <p className={classes.text}>
            <Mail />
            (email)
          </p>
          <p className={classes.text}>
            <Language />
            (website)
          </p>
        </CardContent>
        <Divider variant="middle" className={classes.hr} />
        <Container>
          <p className={classes.text}>Follow us through our social media</p>
          <div className={classes.logo}>
            <p>
              <img src={instagram} alt="logo" />
            </p>
            <p className="ms-3">
              <img src={facebook} alt="logo" />
            </p>
            <p className="ms-3">
              <img src={twitter} alt="logo" />
            </p>
          </div>
        </Container>
        <Container className="pb-3">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
            style={{ root: classes.root }}
          >
            ask for quotation
          </Button>
        </Container>
      </Card>
    </div>
  );
}

export function PackageDetailCard() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<h1>foto</h1>}
          title={<h4>Nama Vendor</h4>}
          subheader={<Rating name="read-only" value="3" readOnly />}
        />
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>
            <Room />
            (Lokasi)
          </p>
          <p className={classes.text}>
            <Person />
            (min) - (max) pax
          </p>
          <p className={classes.text}>
            <AttachMoney />
            start from Rp(harga)
          </p>
        </CardContent>
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
            <p className={classes.text}>include on package :</p>
            <ul>
              <li>(includes)</li>
              <li>(includes)</li>
              <li>(includes)</li>
            </ul>
        </CardContent>
        <Container className="pb-3">
          {!show &&<Button onClick={openModal}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            ask for quotation
          </Button>}
        </Container>
      </Card>
    </div>
  );
}
