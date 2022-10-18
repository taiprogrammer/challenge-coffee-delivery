import { ShoppingCart } from "phosphor-react";

import {
  AddToCart,
  Apresentation,
  BuyProduct,
  CardContainer,
  Flag,
  Price,
  ProductInfo,
} from "./styles";

export function Card() {
  return (
    <CardContainer>
      <Apresentation>
        <img src="/catalog/Type=Expresso.png" alt="" />
        <Flag>TRADICIONAL</Flag>
      </Apresentation>
      <ProductInfo>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ProductInfo>
      <BuyProduct>
        <Price>
          <span>R$</span>
          <h2>9,00</h2>
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
