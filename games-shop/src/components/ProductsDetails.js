import React from "react";
import { DetailWrapper } from "../styles";
import { Link, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const productId = useParams().productId;
  const product = props.products.find((product) => product.id === +productId);
  return (
    <DetailWrapper>
      <Link to="/cookies/1">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => alert(product.id)}
        />
      </Link>

      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="product-price">{product.price} KD</p>
    </DetailWrapper>
  );
};

export default ProductDetails;
