import React from "react";
import styles from "./home.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Collection from "../../Components/Collection/Collection";
import Trending from "../../Components/Trending/Trending";
import Hot from "../../Components/Hot/Hot";
import Catalouge from "../../Components/Catalouge/Catalouge";
import About from "../../Components/About/About";

export default function HomePage() {
  return (
    <div>
      <div className={styles.home}>
        <Box>
          <Button variant="contained" className={styles.homebtn}>
            See All Products
          </Button>
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
