import React, { useState, useEffect } from "react";
import {
  Container,
  Avatar,
  makeStyles,
  Button,
  Grid,
  TextField,
  Modal,
  Typography,
} from "@material-ui/core";
import ChangePassword from "./changePasswordModal";
import { useSelector, useDispatch } from "react-redux";
import { userUpdateProfile } from "../../store/action/user";

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
  foto: {
    display: "none",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [showChange, setShowChange] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userData);
  const [fullname, setFullname] = useState(data.user_fullname || "");
  const [email, setEmail] = useState(data.user_email || "");
  const [birthday, setBirthday] = useState(data.user_birthday || "");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [confirmOldPassword, setConfirmPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userUpdateProfile(email, fullname, birthday, avatar, password, oldPassword));
  };

  return (
    <Container className="pb-5 pt-3">
      <div>
        <h3>Account Details</h3>
        <p className="text-secondary">
          Here’s your account details. Tap to make changes.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="pt-5 d-flex align-items-center">
          {/* <img src={`${avatar.name}`} alt="SELECT FILE..." /> */}
          <Typography>{ avatar?.name || "select an image"}</Typography>
          <div className="ps-5">
            <input
              accept="image/*"
              className={classes.foto}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="outlined"
                color="white"
                className="mb-3"
                component="span"
              >
                <strong>Upload</strong>
              </Button>
            </label>

            <p className={classes.pink} onClick={() => setAvatar('')}>Remove</p>
          </div>
        </div>
        <div className="pt-3">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                label="Fullname"
                variant="outlined"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                label="Birthday (YYYY-MM-DD)"
                variant="outlined"
                type="text"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Grid>
          </Grid>
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
              oldPassword={oldPassword}
              confirmOldPassword={confirmOldPassword}
              password={password}
              setConfirmPassword={setConfirmPassword}
              setOldPassword={setOldPassword}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </form>
    </Container>
  );
}
