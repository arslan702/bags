import React, { useRef, useState } from "react";
import styles from "./shipping.module.css";
import { createStyles, makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  Typography,
  Card,
  Box,
  Button,
  MenuItem,
  FormGroup,
  FormControl,
  Modal,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FDEDED',
  boxShadow: 24,
  borderRadius: '5px',
};

export default function Shipping() {
  const classes = useStyles();
  const router = useRouter();
  const form = useRef();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [description, setDescription] = useState('')
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true);
    emailjs
      .sendForm(
        "service_ymvfttm",
        "template_lcolk1b",
        form.current,
        "bqF2AYPOj2UR8zBaK"
      )
      .then(
        (result) => {
          setOpen(true);
          setLoad(false);
          console.log(result.text);
          setFirstName('')
          setLastName('')
          setEmail('')
          setPhoneNumber('')
          setDescription('')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const continueShopping = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className={styles.shipping}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box
              component="form"
              ref={form}
              className={classes.form}
              onSubmit={sendEmail}
            >
              <Typography p={1}>Contact Us</Typography>
              <FormControl action="">
                <div>
                  <input
                    className={styles.name}
                    required
                    value={firstName}
                    name="firstName"
                    id="outlined-required"
                    placeholder="First Name"
                    defaultValue=""
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    className={styles.name}
                    required
                    value={lastName}
                    name="lastName"
                    id="outlined-required"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    defaultValue=""
                  />
                  <input
                    className={styles.name}
                    required
                    value={email}
                    name="email_address"
                    id="outlined-required"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    defaultValue=""
                  />
                  <input
                    className={styles.name}
                    id="outlined-required"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    defaultValue=""
                  />
                  <textarea
                    className={styles.adress}
                    placeholder="What do you want to know?"
                    type="text"
                    value={description}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    id="outlined-required"
                    defaultValue=""
                  />
                </div>
              </FormControl>
              {open ? (
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Alert severity="success">Your Message is delivered to us. We will contact you soon.</Alert>
                  </Box>
                </Modal>
              ) : (
                ""
              )}
              <LoadingButton
                loading={load}
                type="submit"
                variant="contained"
                className={classes.submitbtn}
              >
                Submit Now
              </LoadingButton>
              <Button
                onClick={(e) => continueShopping(e)}
                variant="contained"
                className={classes.submitbtn}
              >
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
      height: "auto",
      width: "100%",
      margin: "2rem 0",
      [theme?.breakpoints?.down("sm")]: {
        height: "auto",
      },
    },
    nameClass: {
      margin: "1rem 0.3rem",
      width: "47.8%",
      maxWidth: "97%",
      [theme?.breakpoints?.up("sm")]: {
        // minWidth: '97%',
      },
    },
    adress: {
      margin: "0.3rem 0.3rem",
      width: "97%",
      [theme?.breakpoints?.up("sm")]: {
        width: "97%",
      },
    },
    submitbtn: {
      "&:hover": {
        backgroundColor: "#525050",
      },
      margin: "0.5rem 0.3rem",
      backgroundColor: "#232323",
      color: "white",
      fontSize: "0.7rem",
    },
    total: {
      display: "flex",
      justifyContent: "space-between",
      margin: "6rem 1rem 0 2rem",
      color: "rgb(110, 106, 106)",
    },
    ship: {
      display: "flex",
      justifyContent: "space-between",
      margin: "1rem 1rem 0 2rem",
      color: "rgb(104, 101, 101)",
    },
    hr: {
      width: "93%",
      margin: "auto",
      color: "lightgrey",
    },
  })
);
