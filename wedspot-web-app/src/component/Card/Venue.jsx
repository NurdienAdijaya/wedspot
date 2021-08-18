import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HoverRating from "../rating/star";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardAction: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
}));

export default function Venue() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3002/data")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() =>{
  //   axios.get("http://localhost:3000/")
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={12}>
        <Card className={classes.root}>
          {data.map((data) => (
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={data.image_poster}
                title={data.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                </Typography>
                <HoverRating />
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.location}
                </Typography>
              </CardContent>
            </CardActionArea>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
}
