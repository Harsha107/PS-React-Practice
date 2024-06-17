import React from "react";

function Product(props) {
  return (
    <div className="prod-card">
      <a href="/"><img className="product-image" src={props.url} alt="this is a prod" /></a>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Product;