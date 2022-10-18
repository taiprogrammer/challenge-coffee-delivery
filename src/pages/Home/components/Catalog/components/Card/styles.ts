import styled from "styled-components";

export const CardContainer = styled.aside`
  background: ${(props) => props.theme.baseCard};

  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-top: 2.125rem;
  padding-bottom: 1.25rem;

  border-radius: 6px 36px;
`;

export const Apresentation = styled.header`
  gap: 0.75rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: -1.25rem;
`;

export const Flag = styled.span`
  color: ${(props) => props.theme.yellowDark};
  background: ${(props) => props.theme.yellowLight};

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.813rem;

  padding: 0.25rem 0.5rem;

  border-radius: 8px;

  & span + span {
    gap: 0.25rem;
    display: flex;
    align-items: center;
  }
`;

export const ProductInfo = styled.main`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-family: "Baloo 2", sans-serif;

    color: ${(props) => props.theme.baseSubtitle};
  }

  p {
    font-weight: 400;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.138rem;
    color: ${(props) => props.theme.baseLabel};

    width: 80%;
  }
`;

export const BuyProduct = styled.footer`
  gap: 1.438rem;
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.138rem;
    color: ${(props) => props.theme.baseText};
  }

  h2 {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.95rem;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme.baseText};
  }
`;

export const AddToCart = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  input {
    outline: 0;
    border: 0;
    border-radius: 8px;

    width: 4rem;
    padding: 0.531rem 0.2rem;

    background: ${(props) => props.theme.baseButton};
    color: ${(props) => props.theme.baseTitle};

    text-align: center;
  }

  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 0.38rem 0.5rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.purpleDark};

    transition: all 0.2s ease-in;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`;
