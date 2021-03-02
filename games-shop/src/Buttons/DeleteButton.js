import { DeleteButtonStyled } from "../styles";
import productsStore from "../Stores/ProductStore";

const DeleteButton = ({ productid }) => {
  return (
    <DeleteButtonStyled onClick={() => productsStore.deleteProduct(productid)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
