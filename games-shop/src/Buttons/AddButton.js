import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductModal from "../Modals/ProductModal";
import { useState } from "react";

const AddButton = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        createProduct={props.createProduct}
      />

      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
    </>
  );
};

export default AddButton;
