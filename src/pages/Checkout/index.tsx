import { Address } from "./components/Address";
import { SelectedProducts } from "./components/SelectedProducts";
import { ContainerCheckout } from "./styles";

export function Checkout() {
  return (
    <ContainerCheckout>
      <Address />
      <SelectedProducts />
    </ContainerCheckout>
  );
}
