import React from "react";
import products from "../Products";
import ProductsItem from "../components/ProductItem";
import SearchBar from "./Searchbar";
import ProductWrapper from "../styles";
import { useState } from "react";

const Product = (props) => {
  const [query, setQuery] = useState("");
  const [_products, setProduct] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProduct(updatedProducts);
  };
  const productList = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductsItem
        product={product}
        deleteProduct={deleteProduct}
        setProduct={props.setProduct}
        key={product.id}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{productList}</ProductWrapper>
    </>
  );
};
export default Product;
