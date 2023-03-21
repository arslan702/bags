import React, { useEffect, useState } from "react";
import styles from "./trending.module.css";
import { Container } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Slider from "../Slider/Slider";
// import { productData } from "../Slider/data";
import axios from "axios";

export default function Trending() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product/get?page=1&size=15&field=trending&search=yes&sorts=-1')
    .then((res) => {
      setProducts(res?.data?.products)
    })
  },[])
  return (
    <div>
      <div className={styles.trending}>
        <Container>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </Container>
        <Slider title="Trending Products" products={products} />
      </div>
    </div>
  );
}
