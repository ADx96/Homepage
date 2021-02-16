import styles from "../styles";
import img1 from "../images/1.jpg";
import React from "react";

function ShopComponents() {
  return (
    <div>
      <div className="title">
        <h1 style={styles.text}>Games Shop</h1>
        <h4 style={styles.text}>Get Your Games </h4>
        <img alt="Games Shop" src={img1} style={styles.shopImage} />
      </div>
    </div>
  );
}

export default ShopComponents;
