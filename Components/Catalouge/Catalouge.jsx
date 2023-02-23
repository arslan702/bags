import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img1 from '../../images2/backpack/1.jpg'
import img2 from '../../images2/backpack/2.jpg'
import img3 from '../../images2/backpack/3.jpg'
import img4 from '../../images2/backpack/4.jpg'
import img5 from '../../images2/crossbodybag/1.jpg'
import img6 from '../../images2/crossbodybag/2.jpg'
import img7 from '../../images2/handbags/3.jpg'
import img8 from '../../images2/handbags/3.jpg'




import Image from "next/image";
import styles from './catalouge.module.css'

import { textAlign, Container } from '@mui/system';
import {

    Card,
    CardContent,
    Button,
    Grid
  } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container>
    <Box  sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={styles.tab}  >
          <Tab label= "Top Picks " className={styles.tabhead} {...a11yProps(0)} />
          <Tab label="Best Sellers" className={styles.tabhead} {...a11yProps(1)} />
          <Tab label="New Arrivals" className={styles.tabhead} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card className={styles.card}>
              <Image src={img1}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
           
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card className={styles.card}>
              <Image src={img2}  className={styles.img}/>
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Card className={styles.card}>
              <Image src={img3}  className={styles.img}/>
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Card className={styles.card}>
              <Image src={img4}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
           
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card className={styles.card}>
              <Image src={img5}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card className={styles.card}>
            <Image src={img6}  className={styles.img}/>

            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Card className={styles.card}>
              <Image src={img7}  className={styles.img}/>
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Card className={styles.card}>
              <Image src={img8}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
           
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card className={styles.card}>
              <Image src={img2}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
           
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card className={styles.card}>
              <Image src={img3}  className={styles.img}/>
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
           
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Card className={styles.card}>
              
              <Image src={img4}  className={styles.img} />
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Card className={styles.card} >
            <Image src={img5}  className={styles.img}/> 
            </Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                
              >
                Zipper bag <br />
                <del className={styles.old} >100$  </del>50$/- 
              </Typography>
            </CardContent>
            
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
    <br/>
    </Container>
  );
}