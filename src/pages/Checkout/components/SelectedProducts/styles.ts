import styled from "styled-components";

export const ContainerSelectedProducts = styled.aside`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.463rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const ContainerOverview = styled.div`
  background: ${(props) => props.theme.baseCard};

  padding: 2.5rem;
  margin-top: 0.938rem;

  border-radius: 6px 44px;

  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerProducts = styled.main`
  width: 100%;
`;

export const ContainerReviewPrice = styled.section`
  gap: 0.844rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

export const PriceItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: inherit;

  h2 {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.138rem;
    color: ${(props) => props.theme.baseText};
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${(props) => props.theme.baseText};
  }
`;

export const PriceShip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: inherit;

  h2 {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.138rem;
    color: ${(props) => props.theme.baseText};
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${(props) => props.theme.baseText};
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: inherit;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;

  border: 0;
  border-radius: 6px;
  padding: 0.75rem 7.344rem;

  cursor: pointer;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme.white};

  background: ${(props) => props.theme.yellow};

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.yellowDark};
  }
`;
