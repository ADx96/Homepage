import "./App.css";
import ShopComponents from "../src/components/Home";
import Product from "../src/components/ProductList";
import { GlobalStyle, ThemeButton, theme } from "../src/styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App(products) {
  const [currentTheme, setCurrentTheme] = useState("Light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "Light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <GlobalStyle />
      <ShopComponents />
      <Product />
    </ThemeProvider>
  );
}

export default App;
