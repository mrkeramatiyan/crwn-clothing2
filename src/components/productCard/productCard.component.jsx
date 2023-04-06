import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);


  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProductCard;
