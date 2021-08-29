import React from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

export default function ChangePassword({ show, close }) {
  const classes = useStyles();
  return (
    <Dialog open={show} onClose={close}>
      <h1 className={classes.close} onClick={close}>
        x
      </h1>
      <form>
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Old Password"
            type="password"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Confirm New Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={close}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            save changes
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
