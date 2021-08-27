import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import QuotationNew from "../buttons/QuotationNew";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "100%",
    margin: "1rem",
    background: "white",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
  },
  media: {
    height: "260px",
    width: "100%",
  },
});

export default function Package({ image, title, price, data, height }) {
  const classes = useStyles();

  return (
    <div>
      <CardActionArea
        className={classes.root}
        style={{
          height: `${height}`,
        }}
      >
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent
          style={{
            display: "flex",
            height: "inherit",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {title}
          </Typography>

          <div>
            <Typography
              style={{
                color: "#80848D",
                fontSize: "10px",
                fontWeight: "600",
                marginTop: "1rem",
              }}
            >
              Start from
            </Typography>
            <Typography
              style={{ color: "#C97C68", fontWeight: "600", fontSize: "16px" }}
            >
              <NumberFormat
                value={price}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp "
              />
            </Typography>
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              {data.package_services.map((tag, index) => (
                <QuotationNew key={index} content={tag} margin="0.1rem" />
              ))}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </div>
  );
}
