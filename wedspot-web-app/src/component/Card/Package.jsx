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

export default function Package({ overflow, wrap = "wrap", flexDirection }) {
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
        flexWrap: `${wrap}`,
        overflow: `${overflow}`,
        flexDirection: `${flexDirection}`,
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
            <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {data.name}
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
              {data.price}
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
      ))}
    </div>
  );
}
