import React from "react";
import styles from "../Cart/cart.module.css";
// import { Container, Grid, Typography, Card, Box, Button } from "@mui/material";
import Image from "next/image";
import img5 from "../../images2/crossbodybag/1.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

export default function Cart() {
  return (
    <div className={styles.cart}>
      {/* <Container>
        <Grid className={styles.car}>
          <Typography variant="h6">CART</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography className={styles.carthead}>Product</Typography>
            <hr className={styles.hr} />
            <Box className={styles.cartdetail}>
              <Box className={styles.cartcard}>
                <Image src={img5} className={styles.img3} />
              </Box>
              <Box>
                <Typography variant="h6" className={styles.productname}>
                  All out cleansing Balm
                </Typography>
                <Typography className={styles.productprice}>
                  RS 930/-
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={styles.carthead}>QUANTITY</Typography>
            <hr className={styles.hr} />
            <Box>
              <div className={styles.qty}>
                <span className={styles.qtydetail}>-</span>{" "}
                <span className={styles.qtydetail}>1</span>{" "}
                <span className={styles.qtydetail}>+</span>
              </div>
            </Box>
          </Grid>
          <Grid item xs={0} sm={6} md={3} lg={3}>
            <Typography className={styles.carthead}>TOTAL</Typography>
            <hr className={styles.hr} />
            <Box>
              <div className={styles.total}>
                <Typography>Rs 930/-</Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={styles.cartdetail}>
              <Box className={styles.cartcard}>
                <Image src={img5} className={styles.img3} />
              </Box>
              <Box>
                <Typography variant="h6" className={styles.productname}>
                  All out cleansing Balm
                </Typography>
                <Typography className={styles.productprice}>
                  RS 930/-
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box>
              <div className={styles.qty}>
                <span className={styles.qtydetail}>-</span>{" "}
                <span className={styles.qtydetail}>1</span>{" "}
                <span className={styles.qtydetail}>+</span>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box>
              <div className={styles.total}>
                <Typography>Rs 930/-</Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
        <hr className={styles.hr} />
        <br />
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <Typography className={styles.oderhead}>
                Add Order Note
              </Typography>
              <Box>
                <input
                  type="text"
                  className={styles.oderdetail}
                  placeholder="How can we help You ?"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className={styles.checkout}>
              <Typography >
                Total: Rs.930.00
              </Typography><br/>
              <Typography>Shipping & taxes calculated at checkout</Typography> <br/>
              <Button variant='outlined' className={styles.checkbtn} >checkout</Button>
            </Box>
          </Grid>
        </Grid>
      </Container> */}

      <div className={styles.wrapper}>
        <h1>Shopping Cart</h1>
        <div className={styles.project}>
          <div className={styles.shop}>
            <div className={styles.box}>
              <Image src={img5} className={styles.img2} />
              <div className={styles.content}>
                <h3>Women Lipsticks</h3>
                <h4>Price: $40</h4>
                <p className={styles.unit}>
                  Quantity: <input name defaultValue={2} />
                </p>
                <p className={styles.btnarea}>
                  <DeleteIcon /> <span className="btn2">Remove</span>
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={img5} className={styles.img2} />
              <div className={styles.content}>
                <h3>Man's Watches</h3>
                <h4>Price: $40</h4>
                <p className={styles.unit}>
                  Quantity: <input name defaultValue={1} />
                </p>
                <p className={styles.btnarea}>
                  <DeleteIcon /> <span className="btn2">Remove</span>
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={img5} className={styles.img2} />
              <div className={styles.content}>
                <h3>Man's Watches</h3>
                <h4>Price: $40</h4>
                <p className={styles.unit}>
                  Quantity: <input name defaultValue={1} />
                </p>
                <p className={styles.btnarea}>
                  <DeleteIcon className={styles.ico} />{" "}
                  <span className="btn2">Remove</span>
                </p>
              </div>
            </div>

            <div className={styles.rightbar}>
              <p>
                <span>Subtotal</span> <span>$120</span>
              </p>
              <hr />
              <p>
                <span>Tax (5%)</span> <span>$6</span>
              </p>
              <hr />
              <p>
                <span>Shipping</span> <span>$15</span>
              </p>
              <hr />
              <p>
                <span>Total</span> <span>$141</span>
              </p>
              <Link href="/Shipping">
              {/* <a> */}
                <ShoppingCartIcon className={styles.del} />
                Checkout
              {/* </a> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
