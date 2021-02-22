import React from "react";
import Product from "./ProductList";

const CookieDetail = (props) => {
  return (
    <div>
      <h1>{Product.name}</h1>
      <img src={Product.image} alt={Product.name} />
      <p>{Product.description}</p>
      <p>{Product.price} KD</p>
    </div>
  );
};

export default CookieDetail;
