import React, { useEffect, useState } from "react";
import "./hot.module.css";
import Slider from "../Slider/Slider";
// import { hotProducts } from "../Slider/data";
import axios from "axios";

export default function Hot() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product/get?page=1&size=15&field=hot&search=yes&sorts=-1')
    .then((res) => {
      setProducts(res?.data?.products)
    })
  },[])
  return (
    <>
      <Slider title="Hot Selling Products" products={products} />
    </>
  );
}
