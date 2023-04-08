import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import * as S from "./productCard.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <S.ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <S.Footer>
        <S.Name>{name}</S.Name>
        <S.Price>${price}</S.Price>
      </S.Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
