import styles from "./slider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { responsive } from "./data";

export default function Slider({products, title}) {
  const product = products.map((item) => (
    <Product
      id={item?._id}
      name={item?.title}
      url={item?.img?.length ? item?.img[0]?.url : ''}
      price={item?.price}
      oldprice={item?.oldPrice}
      description={item?.description}
      brand={item?.category}
      category={item?.sub}
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