import React from "react";
import { Box, Grid, Card, Typography, CardContent, Button } from "@mui/material";
import styles from "./collection.module.css";
import Image from "next/image";
import tot from '../../images2/Totebags/tot.jpg'
import img1 from '../../images2/backpack/1.jpg'
import img2 from '../../images2/crossbodybag/cross.jpg'
import img3 from '../../images2/handbags/hand.jpg'
import img4 from '../../images2/Shoulder/shoulder.jpg'
export default function Collection() {
  return (
    <div>
      <div className={styles.collection}>
        <Box className={styles.head} >Collections</Box>
        <Grid container>
<Grid item xs={12} sm={6} md={3} lg={3} mx={0}>
<Card className={styles.card} >
              <Image src={tot}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Tote bags
              </Typography>
            </CardContent>
            <Box textAlign="center">
              <Button  variant="contained" className={styles.btn} sx={{backgroundColor: '#5C727D', color:'white', }} >More Items</Button>
            </Box>
</Grid>
<Grid item xs={12} sm={6} md={3} lg={3} mx={0}>
<Card className={styles.card} >
              <Image src={img2}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                crossbody bag
              </Typography>
            </CardContent>
            <Box textAlign="center">
              <Button  variant="contained" className={styles.btn} sx={{backgroundColor: '#5C727D', color:'white', }} >More Items</Button>
            </Box>
</Grid>
<Grid item xs={12} sm={6} md={3} lg={3} mx={0}>
<Card className={styles.card} >
              <Image src={img3}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                hand bags
              </Typography>
            </CardContent>
            <Box textAlign="center">
              <Button  variant="contained" className={styles.btn} sx={{backgroundColor: '#5C727D', color:'white', }} >More Items</Button>
            </Box>
</Grid>
<Grid item xs={12} sm={6} md={3} lg={3} mx={0}>
<Card className={styles.card} >
              <Image src={img4}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Shoulder bags 
              </Typography>
            </CardContent>
            <Box textAlign="center">
              <Button  variant="contained" className={styles.btn} sx={{backgroundColor: '#5C727D', color:'white', }} >More Items</Button>
            </Box>
</Grid>


 {/* <Grid item xs={12} sm={6} md={3} lg={3} mx={0} >
<Card className={styles.card} >
              <Image src={img1}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                back pack <br />
              </Typography>
            </CardContent>
            <Box textAlign="center">
              <Button  variant="contained" className={styles.btn} sx={{backgroundColor: '#5C727D', color:'white', }} >More Items</Button>
            </Box>
</Grid> */}
        </Grid>
      </div>
    </div>
  );
}
