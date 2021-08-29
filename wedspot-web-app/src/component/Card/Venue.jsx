import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    height: 200,
    width: "100%",
  },
  cardAction: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
}));

export default function Venue({ image, title, location, rating, width }) {
  const classes = useStyles();
  const dummyRating = (Math.floor(Math.random() * 5) + 6) / 2;
  return (
    <div>
      <CardActionArea className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          // image={`${image}?${Math.floor(Math.random() * 10000)}`}
          // image={`https://source.unsplash.com/640x480?wedding?${Math.floor(
          //   Math.random() * 10000
          // )}`}
          title={title}
          style={{ width: `${width}` }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textTransform: "capitalize" }}
          >
            <LocationOnIcon /> {location}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              // defaultValue={dummyRating}
              precision={0.5}
              readOnly
              style={{
                paddingTop: "1.6rem",
                marginRight: "1rem",
              }}
            />
            <h5>
              {rating}
              {/* {dummyRating} */}
              /5
            </h5>
          </div>
        </CardContent>
      </CardActionArea>
    </div>
  );
}
