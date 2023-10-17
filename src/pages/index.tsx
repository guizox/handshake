import styled, { css } from "styled-components";

const Wrapper = styled.div(({ theme }) => {
  return css`
    background: ${theme.palette.primary.main};

    ${theme.mediaQueries.fromDesktopSmall(css`
      background: ${theme.palette.secondary.main};
    `)}
  `;
});

export default function Home() {
  return <Wrapper>home page</Wrapper>;
}
