import React from "react";
import products from "../Products";
import ProductsItem from "../components/ProductItem";
import SearchBar from "./Searchbar";
import ProductWrapper from "../styles";

const Product = () => {
  const deleteProduct = (productId) => {
    console.log(`Delete product with the ID ${productId}`);
  };

  const [_products, setProducts] = useState(product);

  const deleteProduct = (cookieId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  const productList = products.map((product) => (
    <ProductsItem
      product={product}
      deleteProduct={deleteProduct}
      key={product.id}
    />
  ));

  return (
    <>
      <SearchBar />
      <ProductWrapper>{productList}</ProductWrapper>
    </>
  );
};
export default Product;
