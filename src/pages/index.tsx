"use strict";
import React from "react";
import { Button } from "../components/atoms/Button/Button";
import styled, { css } from "styled-components";
import { useFetchPlanetById, useFetchPlanets } from "../hooks/useFetchPlanets";
import { useFetchPeople, useFetchPeopleById } from "../hooks/useFetchPeople";
import { useGetSpecies, useGetSpeciesById } from "@/hooks/useFetchSpecies";
import { useFetchFilms, useFetchFilmsbyId } from "@/hooks/useFetchFilms";
import {
  useFetchStarships,
  useFetchStarshipsById,
} from "@/hooks/useFetchStarships";
import {
  useFetchVehicleById,
  useFetchVehicles,
} from "@/hooks/useFetchVehicles";

const Wrapper = styled.div(({ theme }) => {
  return css``;
});

export default function Home() {
  const filmsData = useFetchFilms({
    page: 1,
    title: "A New Hope",
  });
  const filmData = useFetchFilmsbyId(1, "A New Hope");

  const peopleData = useFetchPeople({
    // page: 1,
    name: "Beru",
  });
  const personData = useFetchPeopleById(1);

  const planetsData = useFetchPlanets();
  const planetData = useFetchPlanetById(1);

  const speciesData = useGetSpecies();
  const specieData = useGetSpeciesById(1);

  const starshipsData = useFetchStarships();
  const startshipData = useFetchStarshipsById(9);

  const vehiclesData = useFetchVehicles();
  const vehicleData = useFetchVehicleById(4);

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
