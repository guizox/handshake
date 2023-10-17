"use strict";
import React from "react";
import { Button } from "../components/atoms/Button/Button";
import styled, { css } from "styled-components";
import { useGetPlanetById, useGetPlanets } from "../hooks/usePlanets";
import { useGetPeople, useGetPeopleById } from "../hooks/usePeople";
import { useGetSpecies, useGetSpeciesById } from "@/hooks/useSpecies";
import { useGetFilms, useGetFilmsById } from "@/hooks/useFilms";
import { useGetStarships, useGetStartshipsById } from "@/hooks/useStarships";
import { useGetVehicleById, useGetVehicles } from "@/hooks/useVehicle";

const Wrapper = styled.div(({ theme }) => {
  return css``;
});

export default function Home() {
  const filmsData = useGetFilms();
  const filmData = useGetFilmsById(1);

  const peopleData = useGetPeople();
  const personData = useGetPeopleById(1);

  const planetsData = useGetPlanets();
  const planetData = useGetPlanetById(1);

  const speciesData = useGetSpecies();
  const specieData = useGetSpeciesById(1);

  const starshipsData = useGetStarships();
  const startshipData = useGetStartshipsById(9);

  const vehiclesData = useGetVehicles();
  const vehicleData = useGetVehicleById(4);

  return (
    <Wrapper>
      <Button variant="primary" testId="primary-button" onClick={() => {}}>
        click me
      </Button>

      <Button variant="secondary" testId="secondary-button" onClick={() => {}}>
        click me
      </Button>
    </Wrapper>
  );
}
