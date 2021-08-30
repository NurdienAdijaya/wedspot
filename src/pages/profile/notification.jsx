import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"none",
    padding:"25px"
  },
}));

export default function Notification() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{backgroundColor:"white"}}>
      <h1>Notifications</h1>
      <p>You will get the latest info and updates from us</p>
      <div style={{backgroundColor:"#EEF2E8"}}>
        <p>Today | 16:09</p>
        <h6>Your quotation already sent</h6>
        <h6>Yay! Your quotation request has been sent to the vendor</h6>
      </div>
      <div>
        <p>Saturday, 25th Feb 21 | 16:09</p>
        <h6>Your requested quotation is here</h6>
        <h6>Check out your requested quotation for Gedong Putih Garden & Hall by Gedong Putih</h6>
      </div>
      <div>
        <p>Saturday, 25th Feb 21 | 16:09</p>
        <h6>Your quotation already sent</h6>
        <h6>Yay! Your quotation request has been sent to the vendor</h6>
      </div>
      <div>
        <p>Today | 16:09</p>
        <h6>Your quotation already sent</h6>
        <h6>Yay! Your quotation request has been sent to the vendor</h6>
      </div>
      <div>
        <p>Today | 16:09</p>
        <h6>Your quotation already sent</h6>
        <h6>Yay! Your quotation request has been sent to the vendor</h6>
      </div>
    </div>
  );
}

