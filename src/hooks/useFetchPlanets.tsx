import { GetPlanetPayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToSearchString } from "../helper/objectToSearchString";
import { apiCache } from "../constants/apiCache";

export const useFetchPlanetById = (id: number, name?: string) => {
  return useQuery(`${apiCache.planets}-${id}-${name}`, () =>
    swapiService.planets.getPlanetById(id, name)
  );
};

export const useFetchPlanets = (options?: GetPlanetPayload | undefined) => {
  const queryString = objectToSearchString({
    api: apiCache.planets,
    ...options,
  });

  return useQuery(queryString, () => swapiService.planets.getPlanets(options));
};
