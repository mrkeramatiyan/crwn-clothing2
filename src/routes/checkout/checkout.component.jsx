import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import * as S from "./checkout.styles";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <S.CheckoutContainer>
      <S.CheckOutHeader>
        <S.HeaderBlock>
          <span>Product</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Description</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Quantity</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Price</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Remove</span>
        </S.HeaderBlock>
      </S.CheckOutHeader>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <S.Total>Total: ${cartTotal}</S.Total>
    </S.CheckoutContainer>
  );
};

export default CheckOut;
