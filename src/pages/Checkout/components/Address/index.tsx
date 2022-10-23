import { MapPinLine } from "phosphor-react";
import { PaymentMethod } from "../PaymentMethod";
import {
  AddressForm,
  BaseInput,
  CepInput,
  ComplementoInput,
  ContainerColumn,
  ContainerDataAddress,
  ContainerHeaderForm,
  ContainerRow,
  HeaderInfo,
  TitleAddress,
} from "./styles";

export function Address() {
  return (
    <div>
      <TitleAddress>Complete seu pedido</TitleAddress>
      <AddressForm>
        <ContainerHeaderForm>
          <MapPinLine color="#C47F17" size={20} />
          <HeaderInfo>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </HeaderInfo>
        </ContainerHeaderForm>
        <ContainerDataAddress>
          <ContainerColumn>
            <CepInput type="text" placeholder="CEP" />
            <BaseInput type="text" placeholder="Rua" />
          </ContainerColumn>
          <ContainerRow>
            <BaseInput type="number" placeholder="Número" />
            <ComplementoInput type="text" placeholder="Complemento" />
          </ContainerRow>
          <ContainerRow>
            <BaseInput type="text" placeholder="Bairro" />
            <BaseInput type="text" placeholder="Cidade" />
            <BaseInput type="text" placeholder="UF" />
          </ContainerRow>
        </ContainerDataAddress>
      </AddressForm>
      <PaymentMethod />
    </div>
  );
}
