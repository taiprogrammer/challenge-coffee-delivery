import styled from "styled-components";
import background from "../../assets/img/background.png";

export const ContainerBanner = styled.section`
  padding: 0 10rem;
  background: url(${background});
  background-size: cover;
`;

export const ContentBanner = styled.aside`
  gap: 3.5rem;
  display: flex;
  align-items: flex-start;

  margin-top: 5.875rem;
  padding-bottom: 5.625rem;
  color: ${(props) => props.theme.baseTitle};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  font-family: "Baloo 2", sans-serif;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${(props) => props.theme.baseSubtitle};

  margin-top: 1rem;
`;

export const ContainerInfos = styled.aside`
  gap: 2.5rem;
  display: flex;

  margin-top: 4.125rem;

  section {
    gap: 1.25rem;
    display: flex;
    flex-direction: column;
  }
`;
