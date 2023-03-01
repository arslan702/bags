import React from "react";
import styles from './slider.module.css'
import Image from 'next/image'
import { useRouter } from "next/router";

export default function Product(props) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/details/${props?.id}`)
  }
  return (
    <div onClick={(e) => handleClick(e)} className={styles.card}>
      <Image className={styles.productimage} width={500} height={500} src={props?.url} alt="product image" />
      <br/>
      <p className={styles.description} >{props?.name}</p> <br/>
      <div className={styles.price}><span>{props?.price}</span>    </div> <br/>
    </div>
  );
}