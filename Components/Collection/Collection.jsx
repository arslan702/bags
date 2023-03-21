import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import styles from "./collection.module.css";
import Image from "next/image";
import { createStyles, makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import axios from "axios";

export default function Collection() {
  const classes = useStyles();
  const router = useRouter();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/category/get?page=4`)
      .then((res) => {
        setCategory(res?.data)
        // console.log(res?.data)
      })
      .catch((error) => console.log(error));
  },[])

  const handleMore = (e) => {
    e.preventDefault();
    router.push('/category')
  }
  return (
    <div>
      <div className={styles.collection}>
        <Box className={styles.head}>Categories</Box>
        <Grid container>
          {category?.map((cat) => (
          <Grid key={cat?._id} item xs={12} sm={6} md={3} lg={3} mx={0}>
            <Card className={styles.card}>
              <Image src={cat?.img[0]?.url} width={200} height={200} className={styles.img} alt=''/>
            </Card>
            <CardContent>
              <Typography
                gutterbottom
                variant="h6"
                component="div"
                align="center"
              >
                {cat?.category}
              </Typography>
            </CardContent>
            <Box textAlign="center">
              <Button
                variant="contained"
                onClick={(e) => handleMore(e)}
                className={classes.btn}
                sx={{ backgroundColor: "#5C727D", color: "white" }}
              >
                More Items
              </Button>
            </Box>
          </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    hom: {
      backgroundImage: 'url(../../images2/bg.jpg)',
      height: '80vh',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      [theme?.breakpoints?.down("sm")]: {
        height: 'auto'
      }
    },
    btn: {
      "&:hover": {
        color: 'rgb(219, 210, 210)',
        marginLeft: '2pt',
        backgroundColor: '#1b1717',
      },
      fontSize: '0.7rem',
      height: '2rem',
      width: '9rem',
      backgroundColor: '#232323',
    },
  })
);