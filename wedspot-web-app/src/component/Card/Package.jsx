import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Grid } from 'semantic-ui-react';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    display:"flex",
    justifyContent:"space-between",
    margin:"10rem"
  },
  media: {
    height: 140,
  },
});

export default function Package() {
  const classes = useStyles();
  const [ data, setData ] = useState([])
  const getData = () => {
    axios
    .get("http://localhost:3002/data")
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
        <Card>
          {data.map((data) => (
            
            <CardActionArea>
            <CardMedia
            className={classes.media}
            image={data.poster_path}
            title={data.name}
            />
            <CardContent>
              <Typography style={{fontSize:"24px", fontWeight:"bold", }}>
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
