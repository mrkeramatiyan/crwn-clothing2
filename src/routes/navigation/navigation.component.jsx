import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown-logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sing Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sing In
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
