import styles from "../styles";
import React from "react";

const ProductItem = (props) => {
  const product = props.product;
  return (
    <div style={styles.product} key={product.id}>
      <img
        style={styles.productsImage}
        alt={product.name}
        src={product.image}
      />
      <p style={styles.text}>{product.name}</p>
      <p style={styles.text}>{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
