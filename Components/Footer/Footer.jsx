import React from "react";
import styles from "./footer.module.css";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="h4" px={2} className={styles.footerheader}>
              About the Shop
            </Typography>
            <Typography className={styles.about} pt={1}>
              {" "}
              abc is one of the with a wide range of premium quality makeup
              products to provide the best value for money to global customers
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={styles.footerdetail}
          >
            <Typography variant="h4" px={3} className={styles.footerheader}>
              Help
            </Typography>
            <Typography variant="h6" className={styles.helpdetails}>
              Privacy Policy
            </Typography>
            <Typography variant="h6" className={styles.helpdetails}>
              Shipping Policy
            </Typography>
            <Typography variant="h6" className={styles.helpdetails}>
              Terms & Condition
            </Typography>
            <Typography variant="h6" className={styles.helpdetails}>
              Contact Us
            </Typography>
            <Typography variant="h6" className={styles.helpdetails}>
              Refund Policy
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={styles.footerdetail}
          >
            <Typography variant="h4" px={2} className={styles.footerheader}>
              Main Menu
            </Typography>
            <Typography variant="h6" className={styles.menudetails}>
              All
            </Typography>
            <Typography variant="h6" className={styles.menudetails}>
              New Arrival
            </Typography>
            <Typography variant="h6" className={styles.menudetails}>
              Hand bags
            </Typography>
            <Typography variant="h6" className={styles.menudetails}>
              Shoulder Bag
            </Typography>
            <Typography variant="h6" className={styles.menudetails}>
              Backpack
            </Typography>
            <Typography variant="h6" className={styles.menudetails}>
              Cross body bag
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={styles.footerdetail}
          >
            <Typography variant="h4" px={3} className={styles.footerheader}>
              Contact Us
            </Typography>
            <Box className={styles.boxIcon}>
              <div className={styles.ico}>
                <PhoneSharpIcon fontSize="medium" />
              </div>
              <div className={styles.icons}>+12345678</div>
            </Box>
            <Box className={styles.boxIcon}>
              <div className={styles.ico}>
                <WhatsAppIcon fontSize="medium" />
              </div>
              <div className={styles.icons}>+12345678</div>
            </Box>
            <Box className={styles.boxIcon}>
              <div className={styles.ico}>
                <EmailIcon fontSize="medium" />
              </div>
              <div className={styles.icons}>abc@gmail.com</div>
            </Box>
          </Grid>
        </Grid>
        <Grid>
          <Typography className={styles.footerrights}>
            All rights reserved @ 2023
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}
