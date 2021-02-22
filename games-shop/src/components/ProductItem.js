import React from "react";
import ProductWrapper from "../styles";
import DeleteButtonStyled from "../styles";
import { useState } from "react";

const ProductItem = (props) => {
  const product = props.product;

  const handleDelete = (props) => {
    alert(`Delete product #${product.id}`);
    props.deleteProduct(product.id);
  };

  return (
    <ProductWrapper>
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </ProductWrapper>
  );
};

export default ProductItem;
