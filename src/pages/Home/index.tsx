import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffee from "../../assets/img/coffee.png";
import { Info } from "./components/Info";
import {
  ContainerBanner,
  ContainerInfos,
  ContentBanner,
  Subtitle,
  Title,
} from "./styles";

export function Home() {
  return (
    <ContainerBanner>
      <ContentBanner>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <ContainerInfos>
            <section>
              <Info text="Compra simples e segura">
                <ShoppingCart weight="fill" size={16} />
              </Info>
              <Info text="Entrega rápida e rastreada">
                <Timer weight="fill" size={16} />
              </Info>
            </section>
            <section>
              <Info text="Embalagem mantém o café intacto">
                <Package weight="fill" size={16} />
              </Info>
              <Info text="O café chega fresquinho até você">
                <Coffee weight="fill" size={16} />
              </Info>
            </section>
          </ContainerInfos>
        </div>
        <div>
          <img src={coffee} alt="Coffee Example" />
        </div>
      </ContentBanner>
    </ContainerBanner>
  );
}
