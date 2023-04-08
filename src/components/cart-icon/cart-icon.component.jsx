import { useContext, useRef, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import * as S from "./cart-icon.styles";

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
};

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = (event) => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClickOutside = () => {
    setIsCartOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <S.CartIconContainer ref={ref} onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <S.ItemCount>{cartCount}</S.ItemCount>
    </S.CartIconContainer>
  );
};

export default CartIcon;
