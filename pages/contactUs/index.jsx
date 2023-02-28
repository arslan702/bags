import React, { useRef } from "react";
import styles from "./shipping.module.css";
import { createStyles, makeStyles } from "@mui/styles"
import { Container, Grid, Typography, Card, Box, Button, MenuItem, FormGroup, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

export default function Shipping() {
  const classes = useStyles();
  const router = useRouter();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ymvfttm', 'template_lcolk1b', form.current, 'bqF2AYPOj2UR8zBaK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const continueShopping = (e) => {
    e.preventDefault();
    router.push('/')
  }
  return (
    <div className={styles.shipping}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="form" ref={form} className={classes.form} onSubmit={sendEmail}>
              <Typography p={1}>Contact Us</Typography>
              <FormControl action="">
                <div>                  
                  <TextField
                    className={classes.nameClass && styles.name}
                    required={true}
                    name='firstName'
                    id="outlined-required"
                    label="First Name"
                    defaultValue=""
                  />
                  <TextField
                    className={classes.nameClass && styles.name}
                    required
                    name="lastName"
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                  />
                  {/* <TextField
                    className={classes.adress}
                    type="select"
                    required
                    id="outlined-required"
                    label="Select Country"
                    defaultValue="Pakistan"
                  /> */}
                  {/* <TextField
                    className={classes.adress}
                    required
                    id="outlined-required"
                    label="Email Address"
                    defaultValue=""
                  /> */}
                  <TextField
                    className={classes.nameClass && styles.name}
                    required
                    name="email_address"
                    id="outlined-required"
                    label="Email Address"
                    defaultValue=""
                  />
                  <TextField
                    className={classes.nameClass && styles.name}
                    id="outlined-required"
                    label="Phone Number"
                    name="phoneNumber"
                    defaultValue=""
                  />
                  <textarea
                    className={classes.adress}
                    style={{height: '100px', padding: '15px'}}
                    placeholder="What do you want to know?"
                    type="text"
                    name="description"
                    required
                    id="outlined-required"
                    // label="What do you want to know?"
                    defaultValue=""
                  />
                </div>
              </FormControl>
              <Button type="submit" variant="contained" className={classes.submitbtn}>
                Submit Now
              </Button>
              <Button onClick={(e) => continueShopping(e)} variant="contained" className={classes.submitbtn}>
                Continue to shoping
              </Button>
            </Box>
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
      maxWidth: '97%',
      [theme?.breakpoints?.up("sm")]: {
        // minWidth: '97%',
      }
    },
    adress: {
      margin: '0.3rem 0.3rem',
      width: '97%',
      [theme?.breakpoints?.up("sm")]: {
        width: '97%',
      }
    },
    submitbtn: {
      "&:hover": {
        backgroundColor: '#525050',
      },
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
