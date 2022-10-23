import styled from "styled-components";

export const TitleAddress = styled.h1`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.463rem;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme.baseSubtitle};
`;

export const AddressForm = styled.form`
  background: ${(props) => props.theme.baseCard};

  padding: 2.5rem;
  margin-top: 0.938rem;

  border-radius: 6px;

  width: fit-content;
`;

export const ContainerHeaderForm = styled.header`
  gap: 0.715rem;
  display: flex;
  align-items: flex-start;
`;

export const HeaderInfo = styled.div`
  gap: 0.125rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${(props) => props.theme.baseSubtitle};
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.138rem;
    color: ${(props) => props.theme.baseText};
  }
`;

export const ContainerDataAddress = styled.main`
  margin-top: 2rem;
`;

export const ContainerColumn = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ContainerRow = styled.div`
  gap: 0.75rem;
  display: flex;
  margin-top: 1rem;
`;

export const BaseInput = styled.input`
  border: 0;
  background: ${(props) => props.theme.baseInput};

  line-height: 1.3;
  font-size: 0.875rem;
  color: ${(props) => props.theme.baseText};

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.baseButton};

  padding: 0.75rem;

  &::placeholder {
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseLabel};
  }
`;

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`;

export const ComplementoInput = styled(BaseInput)`
  flex: 1;
`;
