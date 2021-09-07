/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import DownloadQuotation from "../../component/card/quotation/DownloadQuotationmodal";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ButtonSecondary from "../../component/buttons/ButtonSecondary";
import QutationNotif from "../../component/card/quotation/quotationnotifmodal";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuotationInbox,
  getQuotationSent,
} from "../../store/action/quotation";
import NoresultPhone from "../../component/noresult/NoresultPhone";

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
    backgroundColor: "none",
    padding: "25px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

export default function Quotation({ rating, image }) {
  const classes = useStyles();
  const token = localStorage.getItem("token");
  console.log("token", token);
  const dispatch = useDispatch();
  const { inboxList } = useSelector(
    (state) => state?.quotation?.listQuotationInbox
  );
  // const inboxList = "ada isinya coy";
  console.log("inboxList", inboxList);
  const { sentList } = useSelector(
    (state) => state?.quotation?.listQuotationSent
  );
  const { sentListDetail } = useSelector(
    (state) => state?.quotation?.listQuotationSentDetail
  );
  console.log("sentList", sentList);
  console.log("sentlistDetail", sentListDetail);

  useEffect(() => {
    dispatch(getQuotationInbox());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getQuotationSent());
  }, [dispatch]);

  const [id, setId] = useState({
    _id: "",
  });

  useEffect(() => {
    setId({ ...id, id: sentList?.data?.request_id });
  }, [sentList?.data]);

  console.log("id", id);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: "white" }}>
      <h1>Quotation</h1>
      <p style={{ marginBottom: "70px" }}>
        All the info about your quotations with the vendors
      </p>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Inbox" {...a11yProps(0)} />
        <Tab label="Sent" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {inboxList ? (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <div
                className="container-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="content" style={{ marginLeft: "30px" }}>
                  <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                    style={{ width: "60px", height: "60px" }}
                  >
                    <img src={image} alt=""></img>
                  </Avatar>
                </div>
                <div className="content-1" style={{ marginLeft: "20px" }}>
                  <Typography variant="h5" style={{ fontSize: "25px" }}>
                    Gedong Putih
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginTop: "none",
                    }}
                  >
                    <Rating name="read-only" value="3" readOnly />
                  </div>
                  <h1 style={{ marginTop: "0px", fontSize: "10px" }}>
                    Saturday, 25th Feb 21|16:09
                  </h1>
                </div>
              </div>
              <ButtonSecondary
                width="110px"
                content="Details"
                height="36px"
                onClick={handleOpen}
              />
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
                    <DownloadQuotation onClick={handleClose} />
                  </div>
                </Fade>
              </Modal>
            </div>
            <a href="download" style={{ textDecoration: "none" }}>
              <p style={{ textAlign: "end" }}>Quotation attached</p>
            </a>
          </div>
        ) : (
          <NoresultPhone
            title="No received quotations"
            description="Once vendor sent you quotation, it’ll be shown here"
          />
        )}
      </TabPanel>
      {/* ----------------quotation sent---------------------- */}
      <TabPanel value={value} index={1}>
        {sentList ? (
          <div>
            {sentList?.data?.map((data, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <div
                  className="container-1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="content" style={{ marginLeft: "30px" }}>
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                      style={{ width: "60px", height: "60px" }}
                    >
                      R
                    </Avatar>
                  </div>
                  <div
                    className="content-1"
                    style={{ marginLeft: "20px", marginBottom: "30px" }}
                  >
                    <Typography
                      variant="h5"
                      style={{ fontSize: "19px", marginTop: "30px" }}
                    >
                      {data.request_package_id.package_name}
                    </Typography>
                    <Rating name="read-only" value="3" readOnly />
                    <h1 style={{ marginTop: "0px", fontSize: "10px" }}>
                      {data.created_at}
                    </h1>
                  </div>
                </div>
                <ButtonSecondary
                  width="110px"
                  content="Details"
                  height="36px"
                  onClick={handleOpen}
                />
                {/* <button
            onClick={handleOpen}
            style={{
              marginLeft: "570px",
              marginTop: "100px",
              width: "90px",
              height: "40px",
            }}
          >
            Details
          </button> */}
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
                      <QutationNotif
                        onClick={handleClose}
                        data={data}
                        key={index}
                        name={data.request_package_id.package_name}
                        requestId={data.request_id}
                      />
                    </div>
                  </Fade>
                </Modal>
              </div>
            ))}
          </div>
        ) : (
          <NoresultPhone
            title="No sent quotation"
            description="Try to enquiry to some vendors, maybe?"
            titleButton="Search Vendor"
            width="27rem"
            link="/searchdetail/vendor"
          />
        )}
      </TabPanel>
    </div>
  );
}
