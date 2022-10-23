import { Product } from "./components/Product";
import {
  ConfirmButton,
  ContainerOverview,
  ContainerProducts,
  ContainerReviewPrice,
  ContainerSelectedProducts,
  PriceItems,
  PriceShip,
  TotalPrice,
} from "./styles";

export function SelectedProducts() {
  return (
    <ContainerSelectedProducts>
      <h1>Cafés selecionados</h1>
      <ContainerOverview>
        <ContainerProducts>
          <Product />
        </ContainerProducts>
        <ContainerReviewPrice>
          <PriceItems>
            <h2>Total de itens</h2>
            <span>R$ 29,70</span>
          </PriceItems>
          <PriceShip>
            <h2>Entrega</h2>
            <span>R$ 3,50</span>
          </PriceShip>
          <TotalPrice>
            <h2>Total</h2>
            <h2>R$ 33,20</h2>
          </TotalPrice>
        </ContainerReviewPrice>
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </ContainerOverview>
    </ContainerSelectedProducts>
  );
}
