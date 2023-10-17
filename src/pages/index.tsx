"use strict";
import React from "react";
import { Button } from "../components/atoms/Button/Button";
import styled, { css } from "styled-components";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";

const Wrapper = styled.div(({ theme }) => {
  return css``;
});

export default function Home() {
  const people = useQuery("people", () => swapiService.people.getPeople());

  const starship = useQuery("starship", () =>
    swapiService.starship.getStarship()
  );

  const films = useQuery("title", () => swapiService.title.getFilms());

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
