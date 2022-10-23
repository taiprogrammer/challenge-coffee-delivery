import styled from "styled-components";

export const ContainerPaymentMethod = styled.section`
  background: ${(props) => props.theme.baseCard};

  margin-top: 0.75rem;
  margin-bottom: 15rem;
  padding: 2.5rem;

  border-radius: 6px;
`;

export const HeaderPaymentMethod = styled.header`
  gap: 0.801rem;
  display: flex;
  align-items: flex-start;
`;

export const TitleHeader = styled.div`
  gap: 0.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-weight: 400;
    font-size: 1rem;
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

export const ContainerChooses = styled.div`
  margin-top: 2rem;

  gap: 0.75rem;
  display: flex;
  align-items: center;
`;
