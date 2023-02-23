import React, { useState } from "react";
// import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.logo} id="logo">
        Abclogo
      </div>

      <div className={styles.navcontainer}>
        <ul className={styles.topnavcontainer}></ul>
        <ul className={styles.bottomnavcontainer}>
          <li>
            {" "}
            <Link href="/" className={styles.pink}>
              All
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/category" className={styles.pink}>
              New Arrivals
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/category" className={styles.pink}>
              Hand Bags
            </Link>
            {/* <div className={styles.submenu}>
                  <ul>
                    <li className={styles.dropdown}>Machinery</li>
                    <li className={styles.dropdown}>tractor</li>
                    <li className={styles.dropdown}>Kabota</li>
                    <li className={styles.dropdown}>Harvestor</li>
                    <li className={styles.dropdown}>Excevators</li>
                    <li className={styles.dropdown}>Agriculture Equipments</li>
                    <li className={styles.dropdown}>Spare parts</li>
                  </ul>
                </div> */}
          </li>
          <li>
            {" "}
            <Link href="/category" className={styles.pink}>
              Shoulder Bags
            </Link>
            {/* <div className={styles.submenu}>
                  <ul>
                    <li className={styles.dropdown}>Rice</li>
                    <li className={styles.dropdown}>Meat</li>
                    <li className={styles.dropdown}>Pink salt</li>
                    <li className={styles.dropdown}>Outfits</li>
                    <li className={styles.dropdown}>Sport Stuff</li>
                    <li className={styles.dropdown}>Surgical Instrument</li>
                  </ul>
                </div> */}
          </li>
          <li>
            {" "}
            <Link href="/category" className={styles.pink}>
              Backpacks
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/category" className={styles.pink}>
              Cross body bag
            </Link>
          </li>
          {/* <li>  <Link href='' className={styles.pink}>Testimonials</Link></li> */}
        </ul>
      </div>
      <div className={styles.icon}>
        <ShoppingCartIcon />
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
          <li>
            {" "}
            <Link
              href="/"
              className={styles.pink}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              All
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/aboutUs"
              className={styles.pink}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              New Arrivals
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href=""
              className={styles.pink}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Hand Bags
            </Link>
            <div className={styles.submenu}>
              <ul>
                <li className={styles.dropdown}>Rice</li>
                <li className={styles.dropdown}>Meat</li>
                <li className={styles.dropdown}>Pink salt</li>
                <li className={styles.dropdown}>Outfits</li>
                <li className={styles.dropdown}>Sport Stuff</li>
                <li className={styles.dropdown}>Surgical Instrument</li>
              </ul>
            </div>
          </li>
          <li>
            {" "}
            <Link
              href="/"
              className={styles.pink}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Shoulder Bags
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/cash"
              className={styles.pink}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Back packs
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/contact"
              className={styles.pink}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Cross body bag
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
