import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import ImageHeader from "../../component/image-header/imgheader";
import { PackageDetailCard } from "../../component/Card/detailcard";
import { ArrowBackIos } from "@material-ui/icons";
import ImageCarousel from "../../component/carousel/ImageCarousel";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  close: {
    color: "white",
    cursor: "pointer",
    width: "30px",
    position: "absolute",
    zIndex: "10",
    top: "8vh",
    right: "5vw",
    "&:hover": {
      color: "black",
    },
  },
  image: {
    maxWidth: "100%",
  },
}));

function PackageDetail() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ImageHeader />
      <Container className="pt-5 pb-5">
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <div>
              <p>
                <ArrowBackIos />
                Back to All package
              </p>
            </div>
            <h1>Nama Package</h1>
            <h3>Details</h3>
            <ul className="pb-3">
              <li>(keterangan detail)</li>
              <li>(keterangan detail)</li>
              <li>(keterangan detail)</li>
              <li>(keterangan detail)</li>
              <li>(keterangan detail)</li>
              <li>(keterangan detail)</li>
              <li>(keterangan detail)</li>
              <li>(keterangan detail)</li>
            </ul>
            <h3>Take a look inside Gedong Putih</h3>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="https://source.unsplash.com/550x400/?bride"
                  alt=""
                  onClick={handleOpen}
                  className={classes.image}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="https://source.unsplash.com/550x400/?bride"
                  alt=""
                  onClick={handleOpen}
                  className={classes.image}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="https://source.unsplash.com/550x400/?bride"
                  alt=""
                  onClick={handleOpen}
                  className={classes.image}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="https://source.unsplash.com/550x400/?bride"
                  alt=""
                  onClick={handleOpen}
                  className={classes.image}
                />
              </Grid>

              <Modal open={open} onClose={handleClose}>
                <div>
                  <h1 onClick={handleClose} className={classes.close}>
                    X
                  </h1>
                  <ImageCarousel />
                </div>
              </Modal>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <PackageDetailCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PackageDetail;
