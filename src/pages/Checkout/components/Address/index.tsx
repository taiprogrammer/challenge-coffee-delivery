import { MapPinLine } from "phosphor-react";
import { PaymentMethod } from "../PaymentMethod";
import {
  AddressForm,
  BaseInput,
  ButtonSave,
  CepInput,
  ComplementoInput,
  ContainerColumn,
  ContainerDataAddress,
  ContainerHeaderForm,
  ContainerRow,
  HeaderInfo,
  TitleAddress,
} from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";
import { useForm } from "react-hook-form";

const newAddressFormSchema = z.object({
  zip: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighbourhood: z.string(),
  city: z.string(),
  state: z.string(),
});

type NewAddressFormInputs = z.infer<typeof newAddressFormSchema>;

export function Address() {
  const { addAddress, address } = useContext(DeliveryContext);

  const { register, handleSubmit } = useForm<NewAddressFormInputs>({
    resolver: zodResolver(newAddressFormSchema),
  });

  async function handleAddAddress(data: NewAddressFormInputs) {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    addAddress(data);
  }

  return (
    <div>
      <TitleAddress>Complete seu pedido</TitleAddress>
      <AddressForm onSubmit={handleSubmit(handleAddAddress)}>
        <ContainerHeaderForm>
          <MapPinLine color="#C47F17" size={20} />
          <HeaderInfo>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </HeaderInfo>
        </ContainerHeaderForm>
        <ContainerDataAddress>
          <ContainerColumn>
            <CepInput
              required
              type="text"
              placeholder="CEP"
              {...register("zip")}
              value={address?.zip}
            />
            <BaseInput
              type="text"
              placeholder="Rua"
              {...register("street")}
              required
              value={address?.street}
            />
          </ContainerColumn>
          <ContainerRow>
            <BaseInput
              type="number"
              placeholder="Número"
              required
              {...register("number", { valueAsNumber: true })}
              value={address?.number}
            />
            <ComplementoInput
              type="text"
              placeholder="Complemento"
              {...register("complement")}
              value={address?.complement}
            />
          </ContainerRow>
          <ContainerRow>
            <BaseInput
              type="text"
              placeholder="Bairro"
              required
              {...register("neighbourhood")}
              value={address?.neighbourhood}
            />
            <BaseInput
              type="text"
              placeholder="Cidade"
              {...register("city")}
              required
              value={address?.city}
            />
            <BaseInput
              type="text"
              placeholder="UF"
              {...register("state")}
              required
              value={address?.state}
            />
          </ContainerRow>
          <ButtonSave type="submit">CADASTRAR</ButtonSave>
        </ContainerDataAddress>
      </AddressForm>
      <PaymentMethod />
    </div>
  );
}
