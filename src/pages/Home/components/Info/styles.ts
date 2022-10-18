import styled from "styled-components";

export const InfoContainer = styled.div`
  gap: 0.75rem;
  display: flex;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${(props) => props.theme.baseText};
  }
`;

const COLORS = {
  "dark-yellow": "yellowDark",
  yellow: "yellow",
  brown: "baseText",
  purple: "purple",
} as const;

interface InfoPropsColors {
  infoColor: keyof typeof COLORS;
}

export const Icon = styled.span<InfoPropsColors>`
  padding: 0.5rem 0.625rem;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[COLORS[props.infoColor]]};
`;
