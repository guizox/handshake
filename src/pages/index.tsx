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
  const [inputValue, setInputValue] = React.useState("");
  const [filmSearch, setFilmSearch] = React.useState("A New Hope");
  const filmsData = useFetchFilms({
    page: 1,
    title: filmSearch,
  });

  return (
    <Wrapper>
      <Input
        testId="search"
        placeholder="placeholder text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        variant="primary"
        testId="primary-button"
        onClick={() => {
          setFilmSearch(inputValue);
        }}
      >
        click me
      </Button>

      <Button
        variant="secondary"
        testId="secondary-button"
        onClick={() => {
          alert(`nothing happens, it's just to show a secondary button :D`);
        }}
      >
        click me
      </Button>

      {filmsData?.isLoading ? (
        <p>loading...</p>
      ) : (
        <p>{JSON.stringify(filmsData.data?.results)}</p>
      )}
    </Wrapper>
  );
};

export default Home;
