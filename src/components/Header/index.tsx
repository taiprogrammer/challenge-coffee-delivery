import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

import {
  Cart,
  CartButton,
  CartIndicator,
  CartLocale,
  HeaderContainer,
  Locale,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Coffee Delivery" />
      </NavLink>
      <CartLocale>
        <Locale>
          <MapPin weight="fill" size={32} />
          <span>São Paulo, SP</span>
        </Locale>
        <NavLink to="/checkout">
          <Cart>
            <CartButton>
              <ShoppingCart weight="fill" size={32} />
            </CartButton>
            <CartIndicator>3</CartIndicator>
          </Cart>
        </NavLink>
      </CartLocale>
    </HeaderContainer>
  );
}
