import styled from "styled-components";

export const ContainerProduct = styled.div`
  gap: 1.25rem;
  display: flex;
  align-items: flex-start;

  padding-bottom: 2.094rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  width: 100%;

  img {
    height: 4rem;
  }
`;

export const ContainerProductInfo = styled.aside`
  width: 100%;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    span {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme.baseSubtitle};
    }

    h2 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.3;
      color: ${(props) => props.theme.baseText};
    }
  }

  footer {
    gap: 0.5rem;
    display: flex;
    align-items: center;

    margin-top: 0.5rem;
  }
`;

export const QuantityInput = styled.input`
  border: 0;
  width: 4.5rem;
  border-radius: 6px;

  padding: 0.25rem;

  background: ${(props) => props.theme.baseButton};
`;

export const RemoveButton = styled.button`
  gap: 0.25rem;
  display: flex;
  align-items: center;

  border: 0;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;

  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme.baseButton};

  span {
    color: ${(props) => props.theme.baseText};

    font-size: 0.75rem;
    line-height: 1.6;
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }
`;
