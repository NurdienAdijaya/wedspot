import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    margin: "1rem",
  },
  media: {
    height: 140,
    width: "17rem",
  },
  cardAction: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
}));

export default function Venue({ overflow, wrap = "wrap", flexDirection }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexWrap: `${wrap}`,
          overflow: `${overflow}`,
          flexDirection: `${flexDirection}`,
        }}
      >
        {data.map((data) => (
          <CardActionArea className={classes.root}>
            <CardMedia
              className={classes.media}
              image={data.image_poster}
              title={data.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <LocationOnIcon /> {data.location}
              </Typography>
              {/* <HoverRating /> */}
              <div
                style={{
                  display: "flex",
                }}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={data.rating}
                  precision={0.5}
                  readOnly
                  style={{
                    paddingTop: "1.6rem",
                    marginRight: "1rem",
                  }}
                />
                <h5>{data.rating}/5</h5>
              </div>
            </CardContent>
          </CardActionArea>
        ))}
      </Card>
    </div>
  );
}
