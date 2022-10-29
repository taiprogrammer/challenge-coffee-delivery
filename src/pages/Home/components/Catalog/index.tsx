import { useContext } from "react";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";
import { Card } from "./components/Card";
import { CatalogContainer, ContainerProducts, TitleCatalog } from "./styles";

export function Catalog() {
  const { products } = useContext(DeliveryContext);
  return (
    <CatalogContainer>
      <TitleCatalog>Nossos cafés</TitleCatalog>
      <ContainerProducts>
        {products.map((item) => (
          <Card
            image={item.image}
            type={item.type}
            name={item.name}
            description={item.description}
            price={item.price}
            key={item.id}
          />
        ))}
      </ContainerProducts>
    </CatalogContainer>
  );
}
