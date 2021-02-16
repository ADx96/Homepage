import "./App.css";
import img1 from "./images/1.jpg";
import React from "react";
import styles from "./styles";
import products from "./Products";

function App() {
  return (
    <div>
      <div className="title">
        <h1 style={styles.text}>Games Shop</h1>
        <h4 style={styles.text}>Get Your Games </h4>
        <img alt="Games Shop" src={img1} style={styles.shopImage} />
      </div>
      <div>
        <div style={styles.productsImage}>{productsList}</div>
      </div>
    </div>
  );
}

const productsList = products.map((product) => {
  return (
    <div style={styles.product}>
      <img style={styles.ProductImage} alt={product.name} src={product.image} />
      <p style={styles.text}>{product.name}</p>
      <p style={styles.text}>{product.price} KD</p>
    </div>
  );
});
export default App;
