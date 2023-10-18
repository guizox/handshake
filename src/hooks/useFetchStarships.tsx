import { GetStarshipPayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToSearchString } from "../helper/objectToSearchString";
import { apiCache } from "../constants/apiCache";

export const useFetchStarshipsById = (
  id: number,
  name?: string,
  model?: string
) => {
  return useQuery(`${apiCache.startships}-${id}-${name}-${model}`, () =>
    swapiService.starship.getStartshipById(id, name, model)
  );
};

export const useFetchStarships = (options?: GetStarshipPayload | undefined) => {
  const queryString = objectToSearchString({
    api: apiCache.startships,
    ...options,
  });

  return useQuery(queryString, () =>
    swapiService.starship.getStarship(options)
  );
};
