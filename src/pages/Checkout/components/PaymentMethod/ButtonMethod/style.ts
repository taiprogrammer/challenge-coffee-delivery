import styled from "styled-components";

export const ButtonMethodComponent = styled.button`
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.baseButton};

  padding: 1rem;

  cursor: pointer;
  color: ${(props) => props.theme.purple};

  gap: 0.75rem;
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.baseText};
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }

  &:focus {
    background: ${(props) => props.theme.purpleLight};
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`;
