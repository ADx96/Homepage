import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { CreateButtonStyled } from "../styles";
import productsStore from "../Stores/ProductStore";

const ProductModal = ({ isOpen, closeModal, createProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    closeModal();
    event.preventDefault();
    productsStore.createProduct(product);
  };

  return (
    <Modal
      isOpen={isOpen}
      createProduct={createProduct}
      onRequestClose={closeModal}
      contentLabel="Product Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="price"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            type="text"
            className="form-control"
            name="Description"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input required type="image" className="form-control" name="Image" />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModal;
