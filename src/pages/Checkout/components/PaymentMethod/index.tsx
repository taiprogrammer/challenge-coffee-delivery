import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ButtonMethod } from "./ButtonMethod";
import {
  ContainerChooses,
  ContainerPaymentMethod,
  HeaderPaymentMethod,
  TitleHeader,
} from "./styles";

export function PaymentMethod() {
  return (
    <ContainerPaymentMethod>
      <HeaderPaymentMethod>
        <CurrencyDollar color="#8047F8" size={20} />
        <TitleHeader>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </TitleHeader>
      </HeaderPaymentMethod>
      <ContainerChooses>
        <ButtonMethod text="Cartão de crédito">
          <CreditCard />
        </ButtonMethod>
        <ButtonMethod text="Cartão de débito">
          <Bank />
        </ButtonMethod>
        <ButtonMethod text="Dinheiro">
          <Money />
        </ButtonMethod>
      </ContainerChooses>
    </ContainerPaymentMethod>
  );
}
