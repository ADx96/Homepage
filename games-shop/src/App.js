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
import { Redirect } from "react-router-dom";

function App() {
  const [currentTheme, setCurrentTheme] = useState("Light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productSlug) => {
    const updatedProducts = _products.filter(
      (product) => product.slug !== +productSlug
    );
    setProducts(updatedProducts);
    setProduct(null);
  };

  const selectProduct = (productSlug) => {
    const selectedProduct = products.find(
      (product) => product.slug === productSlug
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
        <Route path="/Product" exact>
          <Product
            products={_products}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
        </Route>
        <Route path="/Product/:productSlug">
          <ProductDetails products={products} />
        </Route>
        <Route path="/" exact>
          <ShopComponents />
        </Route>
        <Route path="/404" exact></Route>
        <h1>404</h1>
        <Route path="">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
