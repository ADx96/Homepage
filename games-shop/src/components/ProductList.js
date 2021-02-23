import React from "react";
import ProductsItem from "../components/ProductItem";
import SearchBar from "./Searchbar";
import ProductWrapper from "../styles";
import { useState } from "react";

const Product = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductsItem
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
        selectProduct={props.selectProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{productList}</ProductWrapper>
    </div>
  );
};
export default Product;
