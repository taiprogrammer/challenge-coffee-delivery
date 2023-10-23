import { useContext, useEffect, useState } from "react";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";
import { api } from "../../../../lib/axios";
import { Card } from "./components/Card";
import { CatalogContainer, ContainerProducts, TitleCatalog } from "./styles";

interface Product {
  id: string;
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
  serial: number;
}

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  function getCatalog() {
    api.get("/catalog").then(async ({ data }) => {
      setProducts(await data);
    });
  }

  useEffect(() => {
    getCatalog();
  }, []);

  return (
    <CatalogContainer>
      <TitleCatalog>Nossos cafés</TitleCatalog>
      {products.length > 0 && (
        <ContainerProducts>
          {products.map((item) => (
            <Card
              image={item.image}
              type={item.type}
              name={item.name}
              description={item.description}
              price={item.price}
              serial={item.serial}
              id={item.id}
              key={`item_${item.id}`}
            />
          ))}
        </ContainerProducts>
      )}
    </CatalogContainer>
  );
}
