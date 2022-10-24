import styled from "styled-components";

export const ContainerDelivery = styled.aside`
  padding: 0 10rem;
`;

export const HaederDelivery = styled.header`
  gap: 0.25rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme.yellowDark};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const SectionDelivery = styled.section`
  gap: 6.375rem;
  display: flex;
  align-items: stretch;

  margin-top: 2.5rem;
`;

export const BoxReview = styled.div`
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.purple};

  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2.5rem;
`;

const COLORS = {
  purple: "purple",
  yellow: "yellow",
  "yellow-dark": "yellowDark",
} as const;

interface OrderInfoProps {
  infoColor: keyof typeof COLORS;
}

export const ContainerOrderInfo = styled.div<OrderInfoProps>`
  gap: 0.75rem;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    border-radius: 999px;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme[COLORS[props.infoColor]]};
  }

  span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseText};
  }
`;
