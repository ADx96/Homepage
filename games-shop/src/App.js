import "./App.css";
import ShopComponents from "../src/components/Home";
import ProductsList from "../src/components/ProductList";
import GlobalStyle from "../src/styles";
import ThemeProvider from "styled-components";

const theme = {
  mainColor: "#736d6d", // main font color
  backgroundColor: "#FDFFFD", // main background color
  blue: "#85ddff",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ShopComponents />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
