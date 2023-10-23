import { useContext, useEffect } from "react";
import { ContainerCheckout } from "./styles";
import { Address } from "./components/Address";
import { SelectedProducts } from "./components/SelectedProducts";
import { DeliveryContext } from "../../contexts/DeliveryContext";

export function Checkout() {

  const { fetchCartProducts, cartProducts } = useContext(DeliveryContext);

  useEffect(() => {
    fetchCartProducts();
  }, [cartProducts]);
  return (
    <ContainerCheckout>
      <Address />
      <SelectedProducts cartProducts={cartProducts} />
    </ContainerCheckout>
  );
}
