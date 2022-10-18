import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.063rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartLocale = styled.div`
  gap: 0.75rem;
  display: flex;
  align-items: center;
`;

export const Locale = styled.div`
  gap: 0.25rem;
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme.purpleLight};

  span {
    color: ${(props) => props.theme.purpleDark};
  }
`;

export const Cart = styled.div`
  position: relative;
`;

export const CartIndicator = styled.span`
  top: -0.625rem;
  right: -0.625rem;
  padding: 0.25rem 0.5rem;
  position: absolute;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellowDark};

  font-weight: 700;
  font-size: 0.75rem;
`;

export const CartButton = styled.button`
  border: 0;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.theme.yellowDark};
  background: ${(props) => props.theme.yellowLight};
`;
