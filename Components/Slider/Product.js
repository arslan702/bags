import React from "react";
import styles from './slider.module.css'
import Image from 'next/image'

export default function Product(props) {
  return (
    <div className={styles.card}>
      <Image className={styles.productimage} width={500} height={500} src={props.url} alt="product image" />
      {/* <h2>{props.name}</h2> <br/> */}
      <br/>
      <p className={styles.description} >{props.description}</p> <br/>
      <p className={styles.price}>   <del>{props.oldprice}</del>    <span>{props.price}</span>    </p> <br/>

      {/* <p>
          <br/>
        <button>Add to Cart</button>
      </p> */}
    </div>
  );
}