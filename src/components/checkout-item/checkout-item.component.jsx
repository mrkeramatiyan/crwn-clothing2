import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import * as S from "./checkout-item.styles";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <S.CheckoutItemContainer>
      <S.ImageContainer>
        <img src={imageUrl} alt={name} />
      </S.ImageContainer>
      <div>{name}</div>
      <S.Quantity>
        <S.Arrow onClick={removeItemHandler}>
          &#10094;
        </S.Arrow>
        <S.Value>{quantity}</S.Value>
        <S.Arrow onClick={addItemHandler}>
          &#10095;
        </S.Arrow>
      </S.Quantity>
      <S.Price>{price}</S.Price>
      <S.RemoveButton onClick={clearItemHandler}>
        &#10005;
      </S.RemoveButton>
    </S.CheckoutItemContainer>
  );
};

export default CheckOutItem;
