import { useContext } from "react";
import { DeliveryContext } from "../contexts/DeliveryContext";

export function useCheckout() {
  const { cartProducts } = useContext(DeliveryContext);

  return cartProducts.reduce((acc, current) => acc + current.price, 0);
}
