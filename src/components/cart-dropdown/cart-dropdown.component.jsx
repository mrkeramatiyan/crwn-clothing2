import { useContext } from "react";
import { useNavigate } from "react-router";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import * as S from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <S.CartDropDownContainer onClick={(event) => event.stopPropagation()}>
      <S.CartItems>
        {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )) : <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
      }
      </S.CartItems>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </S.CartDropDownContainer>
  );
};

export default CartDropdown;
