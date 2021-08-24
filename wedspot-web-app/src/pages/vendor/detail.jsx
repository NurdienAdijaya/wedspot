import { Container, Grid } from "@material-ui/core";
import ImageHeader from "../../component/image-header/imgheader";
import { VendorCard } from "../../component/card/detailcard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Package from "../../component/card/Package";

function DetailPage() {
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
      <ImageHeader />
      <Container className="pt-5 pb-5">
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <div className="pb-3">
              <h1>All Package</h1>
              <p>Which one that fits to your preference?</p>
            </div>
            <Grid container spacing={5}>
              {data.map((data) => (
                <Grid item xs={6}>
                  <Package
                    image={data.poster_path}
                    title={data.name}
                    price={data.price}
                    data={data}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <VendorCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DetailPage;
