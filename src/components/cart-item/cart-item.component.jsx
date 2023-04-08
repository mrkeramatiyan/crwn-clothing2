import * as S from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <S.CartItemContainer>
      <img src={imageUrl} alt={name} />
      <S.ItemDetails>
        <S.Name>{name}</S.Name>
        <div>
          {quantity} x ${price}
        </div>
      </S.ItemDetails>
    </S.CartItemContainer>
  );
};

export default CartItem;
