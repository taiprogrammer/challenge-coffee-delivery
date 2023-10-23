import { ReactNode, useContext } from "react";
import { ButtonMethodComponent } from "./style";
import { DeliveryContext } from "../../../../../contexts/DeliveryContext";

interface ButtonMethodProps {
  children: ReactNode;
  text: string;
}

export function ButtonMethod({ children, text }: ButtonMethodProps) {
  const { chooseMethod } = useContext(DeliveryContext);

  function handleChooseMethod() {
    chooseMethod(text);
  }
  return (
    <ButtonMethodComponent onClick={(event) => handleChooseMethod()}>
      {children} <span>{text.toUpperCase()}</span>
    </ButtonMethodComponent>
  );
}
