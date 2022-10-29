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

interface CardProps {
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
}

export function Card({ image, type, name, description, price }: CardProps) {
  return (
    <CardContainer>
      <Apresentation>
        <img src={image} alt="" />
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
          <span>R$</span>
          <h2>{price}</h2>
        </Price>
        <AddToCart>
          <input type="number" placeholder="1" />
          <button>
            <ShoppingCart weight="fill" size={18} />
          </button>
        </AddToCart>
      </BuyProduct>
    </CardContainer>
  );
}
