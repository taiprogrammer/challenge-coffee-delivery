import { ReactNode } from "react";
import { ButtonMethodComponent } from "./style";

interface ButtonMethdProps {
  children: ReactNode;
  text: string;
}

export function ButtonMethod({ children, text }: ButtonMethdProps) {
  return (
    <ButtonMethodComponent>
      {children} <span>{text.toUpperCase()}</span>
    </ButtonMethodComponent>
  );
}
