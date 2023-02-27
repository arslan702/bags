import React, { useEffect, useState } from "react";
import styles from "./details.module.css";
import { Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { Card, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "../../images2/backpack/1.jpg";
import { useRouter } from "next/router";
import Carousel from "react-material-ui-carousel";

export default function Details() {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  let { id } = router?.query;

  useEffect(() => {
    fetch(`/api/product/getOne/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => console.log('error', error));
  }, [id]);

  const handleContact = (e) => {
    e.preventDefault();
    router.push("/Cart");
  };
  return (
    <div>
      {/* <div className={styles.detailsimg}></div> */}

      <div className={styles.details}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card className={styles.card}>
              <Carousel sx={{width: '100%'}}>
                {product?.img?.length > 0 &&
                  product?.img?.map((item, i) => (
                    <img
                      className={styles.CarouselImage}
                      key={i}
                      src={item?.url}
                      alt={`${i} Slide`}
                      // height={300}
                      // width={500}
                    />
                  ))
                }
              </Carousel>
                {/* <Image src={img1} className={styles.img} /> */}
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={styles.description}>
                <Box>
                  <Typography className={styles.detail}>
                    {" "}
                    <b>{product?.title}</b>{" "}
                  </Typography>
                  <br />
                  <Typography
                    sx={{ color: "#969696" }}
                    className={styles.detail}
                  >
                    {" "}
                    {product?.oldPrice > 0 ? 
                    <del>{product?.oldPrice}$</del> : ''} <span className={styles.newprice}>{product?.price}$</span>{" "}
                  </Typography>

                  <ul>
                    <li className={styles.desdetails}>
                      <b>Brand Name:</b> {product?.category}
                    </li>
                    <li className={styles.desdetails}>
                      <b>Category:</b> {product?.sub}
                    </li>
                    <br />
                    <li className={styles.desdetails}>
                      {product?.description}
                    </li>
                    <li className={styles.desdetails}>
                      If you want to buy this product please contact us at <a>wholesaleliquidationauction@gmail.com</a>
                    </li>
                    <br />
                  </ul>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
