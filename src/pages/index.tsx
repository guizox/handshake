import { Button } from "../components/atoms/Button/Button";
import styled, { css } from "styled-components";

const Wrapper = styled.div(({ theme }) => {
  return css``;
});

export default function Home() {
  return (
    <Wrapper>
      <Button variant="primary" testId="primary-button">
        click me
      </Button>

      <Button variant="secondary" testId="secondary-button">
        click me
      </Button>
    </Wrapper>
  );
}
