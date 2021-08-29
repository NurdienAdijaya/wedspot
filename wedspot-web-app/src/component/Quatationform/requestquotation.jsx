import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { OutlinedInput } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Close from "@material-ui/icons/Close";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import SentModal from "./SentModal";

// const currencies = [
//   {
//     value: "USD",
//     label: "bali",
//   },
//   {
//     value: "EUR",
//     label: "surabaya",
//   },
//   {
//     value: "BTC",
//     label: "jakarta",
//   },
//   {
//     value: "JPY",
//     label: "bandung",
//   },
// ];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    marginLeft: "90%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function RequestQuotation({ onClick }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState();
  const [budget, setBudget] = useState();
  const [invites, setInvites] = useState();

  const handleSubmit = () => {
    console.log(name, budget, invites);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <IconButton className={classes.icon} aria-label="close" onClick={onClick}>
        <Close style={{ width: "35px", height: "35px" }} />
      </IconButton>
      <div className={classes.paper}>
        <div style={{ textAlign: "start" }}>
          <h1>Request Quotation</h1>
          <p>
            Tell us your preferences here, then we will get back to you as soon
            as possible once we prepared the nitty gritty
          </p>
        </div>
        <form
          className={classes.form}
          noValidate
          name="form"
          onSubmit={() => handleSubmit()}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Bride to be"
                variant="outlined"
                required
                fullWidth
                id="Bride to be"
                label="Bride to be"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Bride to be"
                name="Bride to be"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-select-currency-native"
                select
                label="City Live"
                required
                fullWidth
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {/* {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                  {option.label}
                  </option>
                ))} */}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Wedding Location"
                required
                fullWidth
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {/* {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                  {option.label}
                  </option>
                ))} */}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-select-currency-native"
                label="date"
                type="date"
                variant="outlined"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Budget"
                variant="outlined"
                required
                fullWidth
                id="Budget"
                label="Budget"
                autoFocus
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Number of invitees"
                label="Number of invitees"
                name="Number of invitees"
                autoComplete="lname"
                value={invites}
                onChange={(e) => setInvites(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="Send Request"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleOpen}
          >
            Send Request
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <SentModal onClick={handleClose} />
              </div>
            </Fade>
          </Modal>
        </form>
      </div>
    </Container>
  );
}
