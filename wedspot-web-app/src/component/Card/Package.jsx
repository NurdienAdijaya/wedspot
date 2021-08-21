import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    maxWidth:"500px",
    margin:"1rem"
  },
  media: {
    height: 140,
    width: "17rem"
  },
});

export default function Package() {
  const classes = useStyles();
  const [ data, setData ] = useState([])
  const getData = () => {
    axios
    .get("http://localhost:4000/data")
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch ((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  },[]);


  return (
        <Card style={{
          display:"flex",
          overflow:"overlay"
        }}>
          {data.map((data) => (
            
            <CardActionArea className={classes.root}>
            <CardMedia
            className={classes.media}
            image={data.poster_path}
            title={data.name}
            />
            <CardContent>
              <Typography style={{fontSize:"20px", fontWeight:"bold", }}>
                {data.name}
              </Typography>
              <p>Start price</p>
              <Typography style={{color:"red"}}>
                {data.price}
              </Typography>
            </CardContent>
          </CardActionArea>
            ))}
        </Card>
  );
}
