import React from "react";
import ProductWrapper from "../styles";
import DeleteButton from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/Product/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>

      <p>{product.name}</p>
      <p>{product.description}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
