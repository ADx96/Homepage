import React from "react";
import ProductWrapper from "../styles";
import DeleteButton from "../Buttons/DeleteButton";
import Link from "../styles";
const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/Product/${product.id}`}>
        <img
          alt={product.name}
          src={product.image}
          onClick={() => props.selectProduct(product.id)}
        />
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
