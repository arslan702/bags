import React from "react";
import styles from "./shipping.module.css";
import { createStyles, makeStyles } from "@mui/styles"
import { Container, Grid, Typography, Card, Box, Button, MenuItem, FormGroup, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";

export default function Shipping() {
  const classes = useStyles();
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
            <div className={classes.form}>
              <Typography p={1}>Shipping Adress</Typography>
              <FormControl action="">
                <div>
                
                <TextField
                    // style={{margin: '0.3rem 0.3rem', width: '97%'}}
                    className={classes.adress}
                    type="select"
                    required
                    id="outlined-required"
                    label="Select Country"
                    defaultValue="Pakistan"
                  />
                  
                  <TextField
                    // style={{margin: '1rem 0.3rem', width: '47.8%'}}
                    className={classes.nameClass}
                    required
                    id="outlined-required"
                    label="First Name"
                    defaultValue=""
                  />
                  <TextField
                    // style={{margin: '1rem 0.3rem', width: '47.8%'}}
                    className={classes.nameClass}
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                  />
                  <TextField
                    // style={{margin: '03rem 0.3rem', width: '97%'}}
                    className={classes.adress}
                    required
                    id="outlined-required"
                    label="Address"
                    defaultValue=""
                  />
                  <TextField
                    // style={{margin: '1rem 0.3rem', width: '47.8%'}}
                    className={classes.nameClass}
                    required
                    id="outlined-required"
                    label="City"
                    defaultValue=""
                  />
                  <TextField
                    // style={{margin: '1rem 0.3rem', width: '47.8%'}}
                    className={classes.nameClass}
                    id="outlined-required"
                    label="Postal Code"
                    defaultValue=""
                  />
                  <TextField
                    // style={{margin: '03rem 0.3rem', width: '97%'}}
                    className={classes.adress}
                    type="number"
                    required
                    id="outlined-required"
                    label="Phone"
                    defaultValue=""
                  />
                </div>
              </FormControl>
              <Button variant="contained" className={classes.submitbtn}>
                Submit Now
              </Button>
              <Button onClick={(e) => continueShopping(e)} variant="contained" className={classes.submitbtn}>
                Continue to shoping
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className={classes.total}>
              <Typography>Total</Typography>
              <Typography>Rs. 930/-</Typography>
            </div>
            <div className={classes.ship}>
              <Typography>Shipping</Typography>
              <Typography>Rs. 250/-</Typography>
            </div>
            <hr className={classes.hr} />
            <div className={classes.ship}>
              <Typography>Total</Typography>
              <Typography>Rs. 1180/-</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      height: 'auto',
      width: '100%',
      margin: "2rem 0",
      [theme?.breakpoints?.down("sm")]: {
        height: 'auto'
      }
    },
    nameClass: {
      margin: '1rem 0.3rem',
      width: '47.8%',
      [theme?.breakpoints?.down("sm")]: {
        width: '97%',
      }
    },
    adress: {
      margin: '0.3rem 0.3rem',
      width: '97%',
      [theme?.breakpoints?.down("sm")]: {
        width: '97%',
      }
    },
    submitbtn: {
      margin: '0.5rem 0.3rem',
      backgroundColor: '#232323',
      color: 'white',
      fontSize: '0.7rem'
    },
    total:{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '6rem 1rem 0 2rem',
      color: 'rgb(110, 106, 106)',
    },
    ship: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1rem 1rem 0 2rem',
      color: 'rgb(104, 101, 101)',
    },
    hr: {
      width: '93%',
      margin: 'auto',
      color: 'lightgrey',
    }
  })
);
