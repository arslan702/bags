import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createStyles, makeStyles } from "@mui/styles";

import Image from "next/image";
import styles from './catalouge.module.css'

import { Container } from '@mui/system';
import {
    Card,
    CardContent,
    Grid
  } from "@mui/material";
import axios from 'axios';
import { useRouter } from 'next/router';

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
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [bestSelling, setBestSelling] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [sales, setSales] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/product/get?page=1&size=12&sorts=ascending')
    .then((res) => {
      setProducts(res?.data?.products)
    })
    axios.get('/api/product/get?page=1&size=12&field=hot&search=yes&sorts=ascending')
    .then((res) => {
      setBestSelling(res?.data?.products)
    })
    axios.get('/api/product/get?page=1&size=12&field=oldPrice')
    .then((res) => {
      setSales(res?.data?.products)
    })
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/details/${id}`)
  }

  return (
      <Container>
    <Box  sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={styles.tab}  >
          <Tab label= "Sale items " className={styles.tabhead} {...a11yProps(0)} />
          <Tab label="Best Selling" className={styles.tabhead} {...a11yProps(1)} />
          <Tab label="New Arrivals" className={styles.tabhead} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={3}>
        {sales?.map((sale) => (
          <Grid onClick={(e) => handleClick(e, sale?._id)} key={sale?._id} item xs={12} sm={6} md={6} lg={3}>
            <Card className={classes.card}>
              <Image src={sale?.img[0]?.url} width={200} height={200} className={classes.img} alt=''/>
            </Card>
            <CardContent>
              <div
                gutterbottom
                variant="h6"
                component="div"
                align="center"
              >
                {sale?.title} <br />
                <del className={styles.old} >{sale?.oldPrice}$  </del>{sale?.price}$/- 
              </div>
            </CardContent>
           
          </Grid>
        ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={3}>
        {bestSelling?.map((best) => (
          <Grid onClick={(e) => handleClick(e, best?._id)} key={best?._id} item xs={12} sm={6} md={6} lg={3}>
            <Card className={classes.card}>
              <Image src={best?.img[0]?.url} width={200} height={200} className={classes.img} alt=''/>
            </Card>
            <CardContent>
              <div
                gutterbottom
                variant="h6"
                component="div"
                align="center"
              >
                {best?.title} <br />
                {best?.price}$/- 
              </div>
            </CardContent>
          </Grid>
        ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={3}>
      {products?.map((product) => (
          <Grid onClick={(e) => handleClick(e, product?._id)} key={product?._id} item xs={12} sm={6} md={6} lg={3}>
            <Card className={classes.card}>
              <Image src={product?.img[0]?.url} width={200} height={200}  className={classes.img} alt=''/>
            </Card>
            <CardContent>
              <div
                gutterbottom
                variant="h6"
                component="div"
                align="center"
              >
                {product?.title} <br />
                  {product?.price}$/- 
              </div>
            </CardContent>
           
          </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
    <br/>
    </Container>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      height: '100%',
      width: '100%',
      cursor: 'pointer',
      boxShadow: '0px 5px 10px -5px black',
    },
    card: {
      width: '100%',
      height: '310px',
    },
    btn: {
      "&:hover": {
        color: 'rgb(152, 106, 161)',
        marginLeft: '2pt',
        backgroundColor: 'rgb(255, 163, 241)',
      },
    },
  })
);