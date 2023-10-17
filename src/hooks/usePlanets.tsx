import { GetPlanetPayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToQueryString } from "../helper/objectToQueryString";
import { apiCache } from "../constants/apiCache";

export const useGetPlanetById = (id: number, name?: string) => {
  return useQuery(`${apiCache.planets}-${id}-${name}`, () =>
    swapiService.planets.getPlanetById(id, name)
  );
};

export const useGetPlanets = (options?: GetPlanetPayload | undefined) => {
  const queryString = objectToQueryString({
    api: apiCache.planets,
    ...options,
  });

  return useQuery(queryString, () => swapiService.planets.getPlanets(options));
};
