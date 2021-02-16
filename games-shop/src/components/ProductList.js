import React from "react";
import products from "../Products";
import ProductsItem from "../components/ProductItem";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductsItem product={product} key={product.id} />
  ));
  return productList;
};
export default ProductList;
