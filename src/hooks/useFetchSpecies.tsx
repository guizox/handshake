import { GetPlanetPayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToSearchString } from "../helper/objectToSearchString";
import { apiCache } from "../constants/apiCache";

export const useGetSpeciesById = (id: number, name?: string) => {
  return useQuery(`${apiCache.species}-${id}-${name}`, () =>
    swapiService.species.getSpeciesById(id, name)
  );
};

export const useGetSpecies = (options?: GetPlanetPayload | undefined) => {
  const queryString = objectToSearchString({
    api: apiCache.species,
    ...options,
  });

  return useQuery(queryString, () => swapiService.species.getSpecies(options));
};
