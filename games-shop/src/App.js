import "./App.css";
import ShopComponents from "../src/components/Home";
import ProductsList from "../src/components/ProductList";

function App() {
  return (
    <div>
      <ShopComponents />
      <div>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
