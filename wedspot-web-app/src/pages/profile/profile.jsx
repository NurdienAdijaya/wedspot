import React, { useState } from "react";
import {
  Container,
  Avatar,
  makeStyles,
  Button,
  Grid,
  TextField,
  Modal,
} from "@material-ui/core";
import ChangePassword from "./changePasswordModal";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  avatar: {
    height: "7rem",
    width: "7rem",
  },
  input: {
    width: "100%",
  },
  pink: {
    color: "#C97C68",
    cursor: "pointer",
  },
  button: {
    width: "232px",
    height: "55px",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [showChange, setShowChange] = useState(false);
  const dispatch = useDispatch();
  const { isError, data } = useSelector((state) => state.userData);
  
  console.log(showChange);

  return (
    <Container className="pb-5 pt-3">
      <div>
        <h3>Account Details</h3>
        <p className="text-secondary">
          Here’s your account details. Tap to make changes.
        </p>
      </div>
      <div className="pt-5 d-flex align-items-center">
        <Avatar className={classes.avatar} src={data.user_avatar}/>
        <div className="ps-5">
          <Button variant="outlined" color="white" className="mb-3">
            <strong>Upload</strong>
          </Button>
          <p className={classes.pink}>Remove</p>
        </div>
      </div>
      <div className="pt-3">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                label="Fullname"
                variant="outlined"
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                label="Birthday (YYYY-MM-DD)"
                variant="outlined"
                type="text"
              />
            </Grid>
          </Grid>
        </form>
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <p className={classes.pink} onClick={() => setShowChange(true)}>
            Change Password
          </p>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save Changes
          </Button>
          <ChangePassword
            show={showChange}
            close={() => setShowChange(false)}
          />
        </div>
      </div>
    </Container>
  );
}
