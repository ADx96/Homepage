import "./App.css";
import ShopComponents from "../src/components/Home";
import ProductsList from "../src/components/ProductList";
import { GlobalStyle, ThemeButton } from "../src/styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    Blue: "#blue",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    Blue: "1b1b52",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [buttonText, setButtonText] = useState("Darkmode");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    if (currentTheme === "light") setButtonText("LightMode");
    else setButtonText("DarkMode");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{buttonText}</ThemeButton>
      <ShopComponents />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
