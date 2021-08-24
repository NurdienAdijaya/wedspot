import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import QuotationNew from "../buttons/QuotationNew";

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "inherit",
    margin: "1rem",
    background: "white",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  media: {
    height: "140px",
    width: "300px",
  },
});

export default function Package({ image, title, price, data }) {
  const classes = useStyles();

  return (
    <div>
      <CardActionArea className={classes.root}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography
            style={{
              color: "#80848D",
              fontSize: "11px",
              fontWeight: "600",
              marginTop: "1rem",
            }}
          >
            Start from
          </Typography>
          <Typography
            style={{ color: "#C97C68", fontWeight: "600", fontSize: "16px" }}
          >
            {price}
          </Typography>
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            {data.tag.map((tag) => (
              <QuotationNew content={tag} margin="0.1rem" />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </div>
  );
}
