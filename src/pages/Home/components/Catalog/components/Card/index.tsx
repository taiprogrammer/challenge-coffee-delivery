import { ShoppingCart } from "phosphor-react";
import currency from "currency.js";

import {
  AddToCart,
  Apresentation,
  BuyProduct,
  CardContainer,
  ContainerFlags,
  Flag,
  Price,
  ProductInfo,
} from "./styles";
import { useContext, useState } from "react";
import { DeliveryContext } from "../../../../../../contexts/DeliveryContext";

interface CardProps {
  id: string;
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
  serial: number;
}

export function Card({
  id,
  image,
  type,
  name,
  description,
  price,
  serial,
}: CardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const { addToCart } = useContext(DeliveryContext);
  const [quantity, setQuantity] = useState<string>("1");
  

  function handleAddToCart() {
    const payload = {
      id,
      image,
      name,
      quantity: Number(quantity),
      price,
      serial,
    };

    addToCart(payload);
  }

  return (
    <CardContainer>
      <Apresentation>
        <img src={image} alt={name} />
        <ContainerFlags>
          {type.map((item) => (
            <Flag>{item}</Flag>
          ))}
        </ContainerFlags>
      </Apresentation>
      <ProductInfo>
        <h2>{name}</h2>
        <p>{description}</p>
      </ProductInfo>
      <BuyProduct>
        <Price>
          <h2>{formattedPrice}</h2>
        </Price>
        <AddToCart>
          <input
            type="number"
            placeholder="1"
            onChange={(event) => setQuantity(event.target.value)}
            value={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={18} />
          </button>
        </AddToCart>
      </BuyProduct>
    </CardContainer>
  );
}
