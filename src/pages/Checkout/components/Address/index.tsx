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
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";

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
  const { addAddress } = useContext(DeliveryContext);

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
            />
            <BaseInput
              required
              type="text"
              placeholder="Rua"
              {...register("street")}
            />
          </ContainerColumn>
          <ContainerRow>
            <BaseInput
              required
              type="number"
              placeholder="Número"
              {...register("number", { valueAsNumber: true })}
            />
            <ComplementoInput
              type="text"
              placeholder="Complemento"
              {...register("complement")}
            />
          </ContainerRow>
          <ContainerRow>
            <BaseInput
              required
              type="text"
              placeholder="Bairro"
              {...register("neighbourhood")}
            />
            <BaseInput
              required
              type="text"
              placeholder="Cidade"
              {...register("city")}
            />
            <BaseInput
              required
              type="text"
              placeholder="UF"
              {...register("state")}
            />
          </ContainerRow>
          <ButtonSave type="submit">CADASTRAR</ButtonSave>
        </ContainerDataAddress>
      </AddressForm>
      <PaymentMethod />
    </div>
  );
}
