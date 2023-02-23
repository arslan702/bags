import styles from "./slider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { responsive } from "./data";

export default function Slider({products, title}) {
  const product = products.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      oldprice={item.oldprice}
      description={item.description}
    
    />
    
  ));

  return (
    <div>
      <h1 className={styles.trendhead} >{title}</h1>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}