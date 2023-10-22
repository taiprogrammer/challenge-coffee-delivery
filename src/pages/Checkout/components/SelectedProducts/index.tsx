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

  const sumPrices = cartProducts.reduce(
    (acc, current) => acc + (current.quantity * current.price),
    0
  );

  const shipping = sumPrices > 0 ? 3.9 : 0;

  const totalPrice = sumPrices + shipping;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(sumPrices);

  const formattedShipping = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(shipping);

  const formattedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

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
            <span>{formattedPrice}</span>
          </PriceItems>
          <PriceShip>
            <h2>Entrega</h2>
            <span>{formattedShipping}</span>
          </PriceShip>
          <TotalPrice>
            <h2>Total</h2>
            <h2>{formattedTotalPrice}</h2>
          </TotalPrice>
        </ContainerReviewPrice>
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </ContainerOverview>
    </ContainerSelectedProducts>
  );
}
