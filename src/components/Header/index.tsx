import { MapPin, ShoppingCart } from "phosphor-react";
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
      <img src={logo} alt="Logo Coffee Delivery" />
      <CartLocale>
        <Locale>
          <MapPin weight="fill" size={32} />
          <span>São Paulo, SP</span>
        </Locale>
        <Cart>
          <CartButton>
            <ShoppingCart weight="fill" size={32} />
          </CartButton>
          <CartIndicator>3</CartIndicator>
        </Cart>
      </CartLocale>
    </HeaderContainer>
  );
}
