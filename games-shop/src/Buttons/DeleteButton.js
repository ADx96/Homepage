import { DeleteButtonStyled } from "../styles";
import productsStore from "../Stores/ProductStore";

const DeleteButton = ({ productId }) => {
  return (
    <DeleteButtonStyled onClick={() => productsStore.deleteProduct(productId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
