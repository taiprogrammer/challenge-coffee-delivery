import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import illustration from "../../assets/img/illustration.png";
import {
  BoxReview,
  ContainerDelivery,
  ContainerOrderInfo,
  HaederDelivery,
  SectionDelivery,
} from "./styles";

export function ConfirmedDevivery() {
  return (
    <ContainerDelivery>
      <HaederDelivery>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HaederDelivery>
      <SectionDelivery>
        <BoxReview>
          <ContainerOrderInfo infoColor="purple">
            <div>
              <MapPin weight="fill" size={22} />
            </div>
            <span>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos - Porto
              Alegre, RS
            </span>
          </ContainerOrderInfo>
          <ContainerOrderInfo infoColor="yellow">
            <div>
              <Timer weight="fill" size={22} />
            </div>
            <span>
              Previsão de entrega <b>20 min - 30 min</b>
            </span>
          </ContainerOrderInfo>
          <ContainerOrderInfo infoColor="yellow-dark">
            <div>
              <CurrencyDollar weight="fill" size={22} />
            </div>
            <span>
              Pagamento na entrega <b>Cartão de Crédito</b>
            </span>
          </ContainerOrderInfo>
        </BoxReview>
        <img src={illustration} alt="Delivery Man" />
      </SectionDelivery>
    </ContainerDelivery>
  );
}
