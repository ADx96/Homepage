import products from "../Products";
import slugify from "react-slugify";
import { makeObservable, observable, action } from "mobx";

class ProductStore {
  products = products;

  createProduct = (product) => {
    product.id = this.products[this.products.length - 1].id + 1;
    product.slug = slugify(product.name);
    this.products.push(product);
  };
  deleteProduct = (productId) => {
    this.products = this.products.filter((product) => product.id !== productId);
  };
  constructor() {
    makeObservable(this, {
      products: observable,
      deleteProduct: action,
      createProduct: action,
    });
  }
}

const productsStore = new ProductStore();
export default productsStore;
