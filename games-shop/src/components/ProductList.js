import React from "react";
import ProductsItem from "../components/ProductItem";
import SearchBar from "./Searchbar";
import ProductWrapper from "../styles";
import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import productsStore from "../Stores/ProductStore";
import { observer } from "mobx-react";

export const Product = (props) => {
  const [query, setQuery] = useState("");

  const productList = productsStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductsItem
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
        selectProduct={props.selectProduct}
        createProduct={props.createProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{productList}</ProductWrapper>
      <AddButton />
    </div>
  );
};
export default observer(Product);
