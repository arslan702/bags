import * as React from "react";
import { useRouter } from 'next/router';
import { styled } from "@mui/material/styles";
import styles from "./catagory.module.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import { Container, Grid, Card, CardContent, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import img1 from '../../images2/backpack/1.jpg'
import img2 from '../../images2/hot/2.jpg'
import img3 from '../../images2/Shoulder/3.jpg'
import img4 from '../../images2/Totebags/4.jpg'
import img5 from '../../images2/crossbodybag/1.jpg'
import img6 from '../../images2/Trending/2.jpg'
import img7 from '../../images2/handbags/4.jpg'
import img8 from '../../images2/handbags/8.jpg'
import Image from "next/image";

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

export default function CustomizedAccordions() {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleDetail = (e) => {
    e.preventDefault();
    router.push('/details')
  }
  return (
    <div>
      <div className={styles.productimg}>
      <div className={styles.productheader} >
All Products
            </div>
</div>
      {/* <Container> */}
        <Box className={styles.products}>
          <Grid container>
            <Grid item xs={12} sm={12} md={2.5} lg={2.5}>
              <div className={styles.category}>Brands</div>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography className={styles.cathead}>
                    Louis vuitton
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.catlist}>Shoulder bag</Typography>
                  <Typography className={styles.catlist}>backpack</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                  <Typography className={styles.catlist}>Clutch</Typography>

                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography className={styles.cathead}>
                    GUCCI
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.catlist}>Shoulder bag</Typography>
                  <Typography className={styles.catlist}>backpack</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                  <Typography className={styles.catlist}>Clutch</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography className={styles.cathead}>
                    Chanel
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.catlist}>Shoulder bag</Typography>
                  <Typography className={styles.catlist}>backpack</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                  <Typography className={styles.catlist}>Clutch</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography className={styles.cathead}>
Prada
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.catlist}>Shoulder bag</Typography>
                  <Typography className={styles.catlist}>backpack</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                  <Typography className={styles.catlist}>Clutch</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography className={styles.cathead}>Hermes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.catlist}>Clutch</Typography>
                  <Typography className={styles.catlist}>backpack</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                <Typography className={styles.catlist}>Shoulder bag</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography className={styles.cathead}>Michael cors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.catlist}>backpack</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                  <Typography className={styles.catlist}>Clutch</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                <Typography className={styles.catlist}>Shoulder bag</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography className={styles.cathead}>Coach</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.catlist}>Clutch</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                <Typography className={styles.catlist}>Shoulder bag</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                  <Typography className={styles.catlist}>backpack</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography className={styles.cathead}>
                    Fendi
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.catlist}>backpack</Typography>
                  <Typography className={styles.catlist}>Clutch</Typography>
                <Typography className={styles.catlist}>Shoulder bag</Typography>
                  <Typography className={styles.catlist}>Tote bags</Typography>
                  <Typography className={styles.catlist}>Hand bags</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

             <Grid item xs={12} sm={12} md={9} lg={9}>
             <Box className={styles.searchbar}>
             <TextField className={styles.search} id="demo-helper-text-misaligned-no-helper"label="Search Products" /> 
             </Box>
               <Box className={styles.producthead}>Products</Box>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img1} className={styles.img} />
                    
                     <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img2} className={styles.img} />
                    <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img3} className={styles.img} />
                    <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img4} className={styles.img} />
                    <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img5} className={styles.img} />
                    <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img6} className={styles.img} />
                    <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img7} className={styles.img} />
                    <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Card className={styles.card}>
                    <Image src={img8} className={styles.img} />
                    <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className={styles.productname}
              >
                Zipper bag <br />
              </Typography>
                <del className={styles.old} >100$  </del>50$/- 
            </CardContent>
                  </Card>
                </Grid>
              </Grid> 
              </Grid>
          
            </Grid>
        </Box>
      {/* </Container> */}
    </div>
  );
}
