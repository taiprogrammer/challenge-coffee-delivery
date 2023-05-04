import { useContext, useEffect } from "react";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";
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
  const { cartProducts, fetchCartProducts } = useContext(DeliveryContext);

  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <ContainerSelectedProducts>
      <h1>Cafés selecionados</h1>
      <ContainerOverview>
        <ContainerProducts>
          {cartProducts.map((item) => {
            return (
              <Product
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                serial={item.serial}
                key={item.serial}
              />
            );
          })}
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
