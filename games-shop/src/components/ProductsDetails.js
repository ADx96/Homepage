import React from "react";
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );
  return (
    <DetailWrapper>
      <Link to={`/Product/`}>
        <p>Back to Products</p>
      </Link>

      <h1>{product.name}</h1>

      <img src={product.image} alt={product.name} />

      <p>{product.description}</p>
      <p>{product.price} KD</p>
    </DetailWrapper>
  );
};

export default ProductDetails;
