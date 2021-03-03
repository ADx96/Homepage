import React from "react";
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import productsStore from "../Stores/ProductStore";
import { observer } from "mobx-react";

const ProductDetails = () => {
  const productSlug = useParams().productSlug;
  const product = productsStore.products.find(
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

export default observer(ProductDetails);
