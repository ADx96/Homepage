import React from "react";
import { DetailWrapper } from "../styles";
import { Link } from "react-router-dom";
import DeleteButton from "../Buttons/DeleteButton";
const ProductDetails = (props) => {
  const product = props.product;

  return (
    <DetailWrapper>
      <p onClick={props.selectProduct}>Back to Products</p>
      <h1>{product.name}</h1>
      <Link to="/cookies/1">
        <img src={product.image} alt={product.name} />
      </Link>
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetails;
