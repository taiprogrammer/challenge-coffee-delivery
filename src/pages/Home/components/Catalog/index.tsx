import { Card } from "./components/Card";
import { CatalogContainer, ContainerProducts, TitleCatalog } from "./styles";

export function Catalog() {
  return (
    <CatalogContainer>
      <TitleCatalog>Nossos cafés</TitleCatalog>
      <ContainerProducts>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerProducts>
    </CatalogContainer>
  );
}
