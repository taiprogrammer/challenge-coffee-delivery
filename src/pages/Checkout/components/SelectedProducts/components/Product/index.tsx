import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { DeliveryContext } from "../../../../../../contexts/DeliveryContext";
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
  const {
    deleteItemCart,
    fetchCartProducts,
    updateQuantityProduct,
  } = useContext(DeliveryContext);
  const [newQuantity, setNewQuantity] = useState<number>(quantity);

  const totalPrice = price * newQuantity;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  function handleDeleteProduct() {
    const payload = {
      id,
      image,
      name,
      quantity,
      price,
      serial,
    };
    deleteItemCart(payload);
    setTimeout(fetchCartProducts, 1000);
  }

  function handleUpdateQuantity(event: any) {
    setNewQuantity(Number(event.target.value));
    const payload = {
      id,
      image,
      name,
      quantity: Number(event.target.value),
      price,
      serial,
    };

    updateQuantityProduct(payload);
  }

  useEffect(() => {
    fetchCartProducts();
  }, [newQuantity]);

  return (
    <ContainerProduct>
      <img src={image} alt={name} />
      <ContainerProductInfo>
        <header>
          <span>{name}</span>
          <h2>{formattedPrice}</h2>
        </header>
        <footer>
          <QuantityInput
            type="number"
            value={newQuantity}
            onChange={(event) => handleUpdateQuantity(event)}
          />
          <RemoveButton onClick={handleDeleteProduct}>
            <Trash />
            <span>REMOVER</span>
          </RemoveButton>
        </footer>
      </ContainerProductInfo>
    </ContainerProduct>
  );
}
