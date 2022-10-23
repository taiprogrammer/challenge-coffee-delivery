import styled from "styled-components";

export const CatalogContainer = styled.section`
  width: 85%;
  margin: 2rem auto;
`;

export const TitleCatalog = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.6rem;
  font-family: "Baloo 2", sans-serif;
`;

export const ContainerProducts = styled.aside`
  gap: 2rem;
  display: grid;
  padding-bottom: 9.375rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
