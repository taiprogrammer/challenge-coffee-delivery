import { Trash } from "phosphor-react";
import {
  ContainerProduct,
  ContainerProductInfo,
  QuantityInput,
  RemoveButton,
} from "./styles";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
  serial: number;
}

export function Product({
  id,
  image,
  name,
  quantity,
  price,
  serial,
}: ProductProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  return (
    <ContainerProduct>
      <img src={image} alt={name} />
      <ContainerProductInfo>
        <header>
          <span>{name}</span>
          <h2>{formattedPrice}</h2>
        </header>
        <footer>
          <QuantityInput type="number" value={quantity} />
          <RemoveButton>
            <Trash />
            <span>REMOVER</span>
          </RemoveButton>
        </footer>
      </ContainerProductInfo>
    </ContainerProduct>
  );
}
