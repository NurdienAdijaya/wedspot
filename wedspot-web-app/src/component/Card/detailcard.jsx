import React, { useState } from "react";
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
import { Dialog, DialogActions, DialogContent } from "@material-ui/core";
import Rating from "@material-ui/lab/rating";
import facebook from "./icon/facebook.png";
import twitter from "./icon/twitter.png";
import instagram from "./icon/instagram.png";
import { Container, Avatar } from "@material-ui/core";
import RequestQuotation from "../Quatationform/requestquotation";
import { useSelector } from "react-redux";

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
  close: {
    position: "absolute",
    zIndex: "1",
    right: "7%",
    top: "2%",
    cursor: "pointer",
  },
  button: {
    width: "100%",
    margin: "1em",
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

export function PackageDetailCard({
  avatar,
  name,
  rating,
  price,
  location,
  min,
  max,
  services,
}) {
  const { isSuccess } = useSelector((state) => state.userData);
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt="avatar" src={avatar} />}
          title={<h4>{name}</h4>}
          subheader={<Rating name="read-only" value={rating} readOnly />}
        />
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>
            <Room />
            {location}
          </p>
          <p className={classes.text}>
            <Person />
            {min} - {max} pax
          </p>
          <p className={classes.text}>
            <AttachMoney />
            start from Rp.{price}
          </p>
        </CardContent>
        <Divider variant="middle" className={classes.hr} />
        <CardContent>
          <p className={classes.text}>include on package :</p>
          <ul>
            {services.map((data, idx) => (
              <li key={idx}>{data}</li>
            ))}
          </ul>
        </CardContent>
        <Container className="pb-3">
          <Button
            onClick={openModal}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            ask for quotation
          </Button>
        </Container>
        {isSuccess ? (
          <>
            <Dialog open={show} onClose={closeModal}>
              <h1 className={classes.close} onClick={closeModal}>
                x
              </h1>
              <DialogContent>
                <RequestQuotation />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={closeModal}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  save changes
                </Button>
              </DialogActions>
            </Dialog>
          </>
        ) : (
          <>
            <Dialog open={show} onClose={closeModal}>
              <DialogContent>
                <h1>Please Login Before Request A Quotation</h1>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={closeModal}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </Card>
    </div>
  );
}
