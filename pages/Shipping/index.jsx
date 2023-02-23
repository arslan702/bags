import React from "react";
import styles from "./shipping.module.css";
import { Container, Grid, Typography, Card, Box, Button, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";

export default function Shipping() {
  const router = useRouter();

  const continueShopping = (e) => {
    e.preventDefault();
    router.push('/')
  }
  return (
    <div className={styles.shipping}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <div className={styles.form}>
              <Typography p={1}>Shipping Adress</Typography>
              <form action="">
                <div>
                
                <TextField
                    type="select"
                    required
                    id="outlined-required"
                    label="Select Country"
                    defaultValue="Pakistan"
                   
                    className={styles.adress}
                  />
                  
                  <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    defaultValue=""
                    className={styles.name}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                    className={styles.name}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Address"
                    defaultValue=""
                    className={styles.adress}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="City"
                    defaultValue=""
                    className={styles.name}
                  />
                  <TextField
                    id="outlined-required"
                    label="Postal Code"
                    defaultValue=""
                    className={styles.name}
                  />
                  <TextField
                    type="number"
                    required
                    id="outlined-required"
                    label="Phone"
                    defaultValue=""
                    className={styles.adress}
                  />
                </div>
              </form>
              <Button variant="contained" className={styles.submitbtn}>
                Submit Now
              </Button>
              <Button onClick={(e) => continueShopping(e)} variant="contained" className={styles.submitbtn}>
                Continue to shoping
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className={styles.total}>
              <Typography>Total</Typography>
              <Typography>Rs. 930/-</Typography>
            </div>
            <div className={styles.ship}>
              <Typography>Shipping</Typography>
              <Typography>Rs. 250/-</Typography>
            </div>
            <hr className={styles.hr} />
            <div className={styles.ship}>
              <Typography>Total</Typography>
              <Typography>Rs. 1180/-</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
