import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLocation } from "../../store/action/config";
import { Select, FormControl, InputLabel } from "@material-ui/core";

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
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const { citys, cityLoading } = useSelector(
    (state) => state?.config?.allLocationList
  );
  console.log("citys", citys);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  const [form, setForm] = useState({
    request_groom_name: "",
    request_bride_name: "",
    request_city: "",
    request_wedding_location: "",
    request_budget: "",
    request_wedding_date: "",
    request_invitees: "",
  });
  console.log("form", form);

  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          // onSubmit={() => handleSubmit()}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="request_bride_name"
                variant="outlined"
                required
                fullWidth
                id="Bride to be"
                label="Bride to be"
                autoFocus
                value={form.request_bride_name}
                onChange={(e) => changeForm(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={form.request_groom_name}
                onChange={(e) => changeForm(e)}
                variant="outlined"
                required
                fullWidth
                id="Groom to be"
                label="Groom to be"
                name="request_groom_name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="request_city"
                id="outlined-select-currency-native"
                select
                label="City Live"
                required
                fullWidth
                value={form.request_city}
                onChange={(e) => changeForm(e)}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {citys?.location?.map((data) => (
                  <option value={form.request_city}>{data}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="request_wedding_location"
                id="outlined-select-currency-native"
                select
                label="Wedding Location"
                required
                fullWidth
                value={form.request_wedding_location}
                onChange={(e) => changeForm(e)}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                {citys?.location?.map((data) => (
                  <option value={form.request_wedding_location}>{data}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="request_wedding_date"
                value={form.request_wedding_date}
                onChange={(e) => changeForm(e)}
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
                name="request_budget"
                variant="outlined"
                required
                fullWidth
                id="Budget"
                label="Budget"
                autoFocus
                value={form.request_budget}
                onChange={(e) => changeForm(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Number of invitees"
                label="Number of invitees"
                name="request_invitees"
                autoComplete="lname"
                value={form.request_invitees}
                onChange={(e) => changeForm(e)}
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