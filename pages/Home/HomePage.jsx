import React from "react";
import styles from "./ho.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Collection from "../../Components/Collection/Collection";
import Trending from "../../Components/Trending/Trending";
import Hot from "../../Components/Hot/Hot";
import { createStyles, makeStyles } from "@mui/styles";
import Catalouge from "../../Components/Catalouge/Catalouge";
import About from "../../Components/About/About";
// import homeimg from "../../images2/bg.jpg"

export default function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <div className={styles.home}>
        <h1 style={{color: 'white', fontSize: '80px'}}>Don't buy from me I am a scammer I don't even paid the man who developed this website for me.</h1>
        <Box>
          <button  className={styles.homebtn}>
            See All Products
          </button>
        </Box>
      </div>
      <Collection />
      <Trending />
      <Hot />
      <Catalouge />
      <About />
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
    homebtn: {
      "&:hover": {
        color: 'rgb(100, 97, 97)',
        backgroundColor: 'white',
      },
      position: 'absolute',
      top: '72%',
      left: '40%',
      backgroundColor: 'white',
      color: 'brown',
      fontWeight: '700',
      padding: '0.4rem 3rem',
      [theme?.breakpoints?.down("sm")]: {
        top: '50%',
        left: '30%',
        padding: '.2rem 1.5rem',
      }
    },
  })
);