import React from "react";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating"
import { CardContent, IconButton } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { color } from "@material-ui/system";
import { Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    height:"650px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
    width:'80px',
    height:'80px'
  },
  text: {
    marginLeft: "10px",
    marginTop: "100px",
    marginBottom: "10px",
  },
  card :{
    alignItems:"center"
  },
  icon:{
    marginLeft:"485px"
  }
}));

export default function DownloadQuotation({onClick}) {
  const classes = useStyles();
  

  return (
    <Container component="main" maxWidth="sm">
    <Card className={classes.root}>
    <div className="container" style={{ alignItems: "start", marginLeft:"10px"}}>
      <div className="title">
        <div className="closeIcon">
          <IconButton
          className={classes.icon}
          aria-label="close"
          onClick={onClick}
          >
            <Close/>
          </IconButton>
        </div>
      <div style={{textAlign:"start"}}>
        <h1 id="transition-modal-title">Request Quotation</h1>
        </div>
          {/* <Typography className={classes.text} style={{ fontSize: "30px" }}>
            Quotation Request
          </Typography> */}
          <div className="container-1" style={{display:"flex",justifyContent:"flex-start", marginTop:"100px"}} id="transition-modal-description">
          <div className="content">
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
          </div>
          <div className="content-1" style={{marginLeft:"20px"}}>
            <Typography variant="h5">Gedong Putih</Typography>
            <Rating name="read-only" value="3" readOnly />
            <p style={{marginTop:"0px"}}>Saturday, 25th Feb 21|16:09</p>
          </div>
          </div>
          <CardContent className={classes.cardContent}>
            <div className="main-container" style={{display:"flex", justifyContent:"space-between", alignItems:"start", textAlign:"center", marginTop:"20px"}}>
              <div className="list-main">
                <h6 style={{color:"#a0a0a0"}}>Bride to be</h6>
                <p>Rara Sekar</p>
              </div>
              <div className="list-main1">
                <h6 style={{color:"#a0a0a0"}}>Groom to be</h6>
                <p>Ben Laksana</p>
              </div>
              <div className="list-main2">
                <h6 style={{color:"#a0a0a0"}}>City live</h6>
                <p>Bandung</p>
              </div>
            </div>
            <hr className="underline" style={{width:"100%",height:"1px",color:"#FF0000",size:"3"}}></hr>
            <div className="main-container" style={{display:"flex", justifyContent:"space-between", marginRight:"190px"}}>
              <div className="list-body">
                <h6 style={{color:"#a0a0a0"}}>Wedding Location</h6>
                <p>Bandung</p>
              </div>
              <div className="list-body">
                <h6 style={{color:"#a0a0a0"}}>Wedding Date</h6>
                <p>23/10/2021</p>
              </div>
            </div>
            <div className="main-container" style={{display:"flex", justifyContent:"space-between", marginRight:"160px", marginTop:"50px"}}>
              <div className="list-footer">
                <h6 style={{color:"#a0a0a0",}}>Budget</h6>
                <p>Rp.60.000.000</p>
              </div>
              <div className="list-footer1">
                <h6 style={{color:"#a0a0a0"}}>Number of Invitees</h6>
                <p>200 pax</p>
              </div>
            </div>
            <Button
            type="Send Request"
            fullWidth
            variant="contained"
            color="primary"
            style={{marginTop:"100px"}}
          >
            Download Quotation
          </Button>
          </CardContent>
      </div>
    </div>
  </Card>
    </Container>
  );
}
