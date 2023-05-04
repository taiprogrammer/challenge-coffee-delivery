import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { DeliveryContext } from "../../contexts/DeliveryContext";

import {
  Cart,
  CartButton,
  CartIndicator,
  CartLocale,
  HeaderContainer,
  Locale,
} from "./styles";

export function Header() {
  const { cartProducts, fetchCartProducts, address, fetchAddress } =
    useContext(DeliveryContext);

  const cartLength = cartProducts.length;

  const addressName = address
    ? `${address?.city}, ${address?.state}`
    : "Cadastre um novo endereço";

  useEffect(() => {
    fetchCartProducts();
    fetchAddress();
  }, []);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Coffee Delivery" />
      </NavLink>
      <CartLocale>
        <Locale>
          <MapPin weight="fill" size={32} />
          <span>{addressName}</span>
        </Locale>
        <NavLink to="/checkout">
          <Cart>
            <CartButton>
              <ShoppingCart weight="fill" size={32} />
            </CartButton>
            <CartIndicator>{cartLength}</CartIndicator>
          </Cart>
        </NavLink>
      </CartLocale>
    </HeaderContainer>
  );
}
