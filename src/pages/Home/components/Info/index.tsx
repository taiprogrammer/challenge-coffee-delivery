import { ReactNode } from "react";
import { Icon, InfoContainer } from "./styles";

interface InfoProps {
  children: ReactNode;
  text: string;
}

enum TypeOfIcon {
  "COMPRA" = "Compra simples e segura",
  "ENTREGA" = "Entrega rápida e rastreada",
  "EMBALAGEM" = "Embalagem mantém o café intacto",
  "CAFE" = "O café chega fresquinho até você",
}

export function Info({ children, text }: InfoProps) {
  return (
    <InfoContainer>
      <Icon
        infoColor={
          text === TypeOfIcon.COMPRA
            ? "dark-yellow"
            : text === TypeOfIcon.ENTREGA
            ? "yellow"
            : text === TypeOfIcon.EMBALAGEM
            ? "brown"
            : "purple"
        }
      >
        {children}
      </Icon>
      <p>{text}</p>
    </InfoContainer>
  );
}
