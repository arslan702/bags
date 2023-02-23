import React from "react";
import styles from "./details.module.css";
import { Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { Card, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "../../images2/backpack/1.jpg";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();

  const handleContact = (e) => {
    e.preventDefault();
    router.push("/Cart");
  };
  return (
    <div>
      <div className={styles.detailsimg}></div>

      <div className={styles.details}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card className={styles.card}>
                <Image src={img1} className={styles.img} />
              </Card>
              <Grid container>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <Card className={styles.card2}>
                    <Image src={img1} className={styles.img2} />
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <Card className={styles.card2}>
                    <Image src={img1} className={styles.img2} />
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <Card className={styles.card2}>
                    <Image src={img1} className={styles.img2} />
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <Card className={styles.card2}>
                    <Image src={img1} className={styles.img2} />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={styles.description}>
                <Box>
                  <Typography className={styles.detail}>
                    {" "}
                    <b>Maroon zipper backpack</b>{" "}
                  </Typography>
                  <br />
                  <Typography
                    sx={{ color: "#969696" }}
                    className={styles.detail}
                  >
                    {" "}
                    <del>100$</del> <span className={styles.newprice}>80$</span>{" "}
                  </Typography>

                  <ul>
                    <li className={styles.desdetails}>
                      <b>Weight:</b> 18 inches
                    </li>
                    <li className={styles.desdetails}>
                      <b>Height:</b> 12 inches
                    </li>
                    <li className={styles.desdetails}>
                      <b>Depth:</b> 5 inches
                    </li>
                    <br />
                    <li className={styles.desdetails}>
                      One main compartment with zipper closure as well as a
                      string clasp lock.
                    </li>
                    <br />
                    <li className={styles.desdetails}>
                      <b>Material:</b> Faux Leather{" "}
                    </li>
                  </ul>

                  <Box>
                    <h5 className={styles.qtyhead}>Quantity:</h5>
                    <div className={styles.qty}>
                      <span className={styles.qtydetail}>-</span>{" "}
                      <span className={styles.qtydetail}>1</span>{" "}
                      <span className={styles.qtydetail}>+</span>
                    </div>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      className={styles.btn}
                      onClick={(e) => handleContact(e)}
                      fullwidth
                      sx={{ backgroundColor: "#5C727D", color: "white" }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
