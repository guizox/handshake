"use client";
import React from "react";
import { Button } from "../components/atoms/Button/Button";
import { Input } from "../components/atoms/Input/Input";
import styled, { css } from "styled-components";
import { useFetchPlanetById, useFetchPlanets } from "../hooks/useFetchPlanets";
import { useFetchPeople, useFetchPeopleById } from "../hooks/useFetchPeople";
import { useGetSpecies, useGetSpeciesById } from "../hooks/useFetchSpecies";
import { useFetchFilms, useFetchFilmsbyId } from "../hooks/useFetchFilms";
import {
  useFetchStarships,
  useFetchStarshipsById,
} from "../hooks/useFetchStarships";
import {
  useFetchVehicleById,
  useFetchVehicles,
} from "../hooks/useFetchVehicles";

const Wrapper = styled.div(({ theme }) => {
  return css``;
});
const Home = () => {
  return <Wrapper></Wrapper>;
};

export default Home;
