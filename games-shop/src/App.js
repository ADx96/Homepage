import "./App.css";
import ShopComponents from "../src/components/Home";
import Product from "../src/components/ProductList";
import { GlobalStyle, theme } from "../src/styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductsDetails";
import products from "./Products";

function App() {
  const [currentTheme, setCurrentTheme] = useState("Light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== +productId
    );
    setProducts(updatedProducts);
    setProduct(null);
  };

  const selectProduct = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setProduct(selectedProduct);
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Switch>
        <Route path="/Product">
          <Product
            products={_products}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
        </Route>
        <Route path="/Product/:productId">
          <ProductDetails
            product={_products}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
        </Route>
        <Route exact path="/">
          <ShopComponents />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
