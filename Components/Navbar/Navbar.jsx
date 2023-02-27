import React, { useEffect, useState } from "react";
// import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.logo} id="logo">
        Abclogo
      </div>

      <div className={styles.navcontainer}>
        <ul className={styles.topnavcontainer}></ul>
        <ul className={styles.bottomnavcontainer}>
          {/* <li>
            {" "}
            <Link href="/" className={styles.pink}>
              All
            </Link>
          </li> */}
          <li>
            {" "}
            <Link href="/" className={styles.pink}>
              All Products
            </Link>
          </li>
          {category?.map((cat) => (
          <li key={cat?._id}>
            {" "}
            <Link href="/category" className={styles.pink}>
              {cat?.category}
            </Link>
          </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu  */}
      <div
        className={
          menuOpen ? `${styles.right} ${styles.active}` : `${styles.right}`
        }
        // className={`${styles.right}` + (menuOpen && `${styles.active}`)}
      >
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
      </div>
      {/* <div className={menuOpen ? `${styles.menu}` `${styles.active}` : `${styles.menu}`}></div> */}
      <div
        className={
          menuOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`
        }
        // className={`${styles.menu}` (menuOpen && `${styles.active}`)}
      >
        <ul>
          {/* <li>
            {" "}
            <Link
              href="/"
              className={styles.pink}
            >
              All
            </Link>
          </li> */}
          <li>
            {" "}
            <Link
              href="/category"
              className={styles.pink}
            >
              All Products
            </Link>
          </li>
          {category?.map((cat) => (
          <li key={cat?._id}>
            {" "}
            <Link
              href=""
              className={styles.pink}
            >
              {cat?.category}
            </Link>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
