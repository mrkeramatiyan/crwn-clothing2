import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container" onClick={(event) => event.stopPropagation()}>
      <div className="cart-item" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
