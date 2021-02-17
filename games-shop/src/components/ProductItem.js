import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: inline-block;
  margin-left: 10%;
  img {
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.blue};
    }
  }
`;

const ProductItem = (props) => {
  const product = props.product;
  return (
    <ProductWrapper>
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </ProductWrapper>
  );
};

export default ProductItem;
