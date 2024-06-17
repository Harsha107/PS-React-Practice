import React from "react";
import "./fearuredProducts.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
import { productData, responsive } from "./data";

function FeaturedProducts() {
  const product = productData.map((item) => (
    <Product name={item.name} url={item.imageurl} />
  ));

  return (
    <div className="f-products">
      <h1>Featured Products</h1>
      <a className="fp-btn" href="/">
        View More
      </a>
      <Carousel
        className="fp-carousel"
        showDots={false}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
      >
        {product}
      </Carousel>
    </div>
  );
}

export default FeaturedProducts;
