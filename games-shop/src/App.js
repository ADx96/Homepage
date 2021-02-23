import "./App.css";
import ShopComponents from "../src/components/Home";
import Product from "../src/components/ProductList";
import { GlobalStyle, theme } from "../src/styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductsDetails";

function App(products) {
  const [currentTheme, setCurrentTheme] = useState("Light");

  const [product, setProduct] = useState(null);

  const setView = () => {
    if (product) return <ProductDetails product={product} />;
    return <Product setProduct={setProduct} />;
  };
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  };
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Switch>
        <Route path="/Product">
          <Product setProduct={setProduct} deleteProduct={deleteProduct} />
        </Route>
        <Route path="/Product/:productId">
          <ProductDetails />
          {setView()}
        </Route>
        <Route exact path="/">
          <ShopComponents />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
