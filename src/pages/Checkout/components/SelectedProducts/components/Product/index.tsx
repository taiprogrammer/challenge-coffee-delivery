import { Trash } from "phosphor-react";
import {
  ContainerProduct,
  ContainerProductInfo,
  QuantityInput,
  RemoveButton,
} from "./styles";

export function Product() {
  return (
    <ContainerProduct>
      <img src="/catalog/Type=Expresso.png" alt="" />
      <ContainerProductInfo>
        <header>
          <span>Expresso Tradicional</span>
          <h2>R$ 9,90</h2>
        </header>
        <footer>
          <QuantityInput type="number" value="1" />
          <RemoveButton>
            <Trash />
            <span>REMOVER</span>
          </RemoveButton>
        </footer>
      </ContainerProductInfo>
    </ContainerProduct>
  );
}
