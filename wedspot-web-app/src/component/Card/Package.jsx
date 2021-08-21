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
    maxWidth: "350px",
    margin: "1rem",
    background: "white",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  media: {
    height: 140,
    width: 300,
  },
});

export default function Package() {
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
    <div
      style={{
        display: "flex",
        overflow: "scroll",
      }}
    >
      {data.map((data) => (
        <CardActionArea className={classes.root}>
          <CardMedia
            className={classes.media}
            image={data.poster_path}
            title={data.name}
          />
          <CardContent>
            <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
              {data.name}
            </Typography>
            <Typography
              style={{
                color: "#80848D",
                fontSize: "12px",
                fontWeight: "600",
                marginTop: "4px",
              }}
            >
              Start from
            </Typography>
            <Typography style={{ color: "#C97C68", fontWeight: "600" }}>
              {data.price}
            </Typography>
            <div>
              {data.tag.map((tag) => (
                <QuotationNew content={tag} margin="0.1rem" />
              ))}
            </div>
          </CardContent>
        </CardActionArea>
      ))}
    </div>
  );
}
