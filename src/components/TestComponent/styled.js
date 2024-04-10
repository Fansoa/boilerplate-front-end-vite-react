import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme, isHover }) => `
    background-color: ${isHover ? theme.TestComponentTheme.hover.backgroundColor : theme.TestComponentTheme.default.backgroundColor};
  `}
`;

export const Label = styled.p`
  font-weight: 900;
`;