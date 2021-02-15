import "./App.css";
import img1 from "./images/1.jpg";

const styles = {
  text: { textAlign: "center" },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
};
function App() {
  return (
    <div className="title">
      <h1 style={styles.text}>Games Shop</h1>
      <h4 style={styles.text}>Get Your Games </h4>
      <img alt="Games Shop" src={img1} style={styles.shopImage} />
    </div>
  );
}

export default App;
