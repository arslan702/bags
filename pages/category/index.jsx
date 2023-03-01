import * as React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import styles from "./catagory.module.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Card,
  CardContent,
  Pagination,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import axios from "axios";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
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
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState("panel1");
  const [brands, setBrands] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState()
  const [pageSize, setPageSize] = React.useState();

  React.useEffect(() => {
    axios.get('/api/brand/get')
    .then((res) => (
      setBrands(res?.data)
    ))
    axios.get('/api/category/get')
    .then((res) => (
      setCategories(res?.data)
    ))
    axios.get(`/api/product/get?page=${page}&size=8`)
    .then((res) => {
      setProducts(res?.data?.products)
      setTotalPages(res?.data?.totalProducts)
      setPageSize(res?.data?.pageSize);
      })
  },[page])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClick = (e, brand, category) => {
    e.preventDefault();
    axios.get(`/api/product/get?page=${page}&size=8&field=category&sub=sub&brand=${brand}&category=${category}`)
    .then((res) => {
      setProducts(res?.data?.products)
      setTotalPages(res?.data?.totalProducts)
      setPageSize(res?.data?.pageSize);
    })
  }

  const handleDetail = (e,id) => {
    e.preventDefault();
    router.push(`/details/${id}`);
  };

  return (
    <div>
      <div className={styles.productimg}>
        <div className={styles.productheader}>All Products</div>
      </div>
      {/* <Container> */}
      <Box className={styles.products}>
        <Grid container>
          <Grid item xs={12} sm={12} md={2.5} lg={2.5}>
            <div className={styles.category}>Brands</div>
            {brands?.map((brand, index) => (
            <Accordion
              key={brand?._id}
              expanded={expanded === `panel${index+1}`}
              onChange={handleChange(`panel${index+1}`)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className={styles.cathead}>
                  {brand?.title}
                </Typography>
              </AccordionSummary>
              
              <AccordionDetails>
              {categories?.map((category) => (
                <>
                <Typography key={category._id} onClick={(e) => handleClick(e,brand?.title, category?.category)} className={styles.catlist}>{category?.category}</Typography>
                </>
                ))}
              </AccordionDetails>
            </Accordion>
            ))}
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={9}>
            {/* <Box className={styles.searchbar}>
              <TextField
                className={styles.search}
                id="demo-helper-text-misaligned-no-helper"
                label="Search Products"
              />
            </Box> */}
            <Box className={styles.producthead}>Products</Box>
            <Grid container>
              {products.length == 0 ?
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <center>
                  <Typography
                      gutterbottom
                      variant="h6"
                      component="div"
                      className={styles.productname}
                    >
                      No Results Found
                    </Typography>
                  </center>
              </Grid>
                :
              products?.map((product) => (
              <Grid product={product?._id} item xs={12} sm={6} md={6} lg={3}>
                <Card onClick={(e) => handleDetail(e, product._id)} className={styles.card}>
                  <Image src={product?.img[0]?.url} width={200} height={200} className={styles.img} alt='product image'/>

                  <CardContent>
                    <Typography
                      gutterbottom
                      variant="h6"
                      component="div"
                      className={styles.productname}
                    >
                      {product?.title}
                    </Typography><br />
                    {product?.oldPrice > 0 ?
                    <del className={styles.old}>{product?.oldPrice} </del>
                    : ''}
                    {product?.price}/-
                  </CardContent>
                </Card>
              </Grid>
              ))}
            </Grid>
            <Pagination 
              count={Math.ceil(totalPages/pageSize)} 
              page={page}
              onChange={(e,value) => setPage(value)} 
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
