import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const currencies = [
    {
      value: 'USD',
      label: 'bali',
    },
    {
      value: 'EUR',
      label: 'surabaya',
    },
    {
      value: 'BTC',
      label: 'jakarta',
    },
    {
      value: 'JPY',
      label: 'bandung',
    },
  ];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RequestQuotation() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div style={{textAlign:"start"}}>
          <h1>Request Quotation</h1>
          <p>Tell us your preferences here, then we will get back to you as soon as possible once we prepared the nitty gritty</p>
        </div>
        <form className={classes.form} noValidate>
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
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
          label="Native select"
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
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Wedding location"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Wedding location"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="wedding date"
                name="wedding date"
                autoComplete="lname"
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
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}