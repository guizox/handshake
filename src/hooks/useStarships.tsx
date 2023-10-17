import { GetStarshipPayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToSearchString } from "../helper/objectToSearchString";
import { apiCache } from "../constants/apiCache";

export const useGetStartshipsById = (
  id: number,
  name?: string,
  model?: string
) => {
  return useQuery(`${apiCache.startships}-${id}-${name}-${model}`, () =>
    swapiService.starship.getStartshipById(id, name, model)
  );
};

export const useGetStarships = (options?: GetStarshipPayload | undefined) => {
  const queryString = objectToSearchString({
    api: apiCache.startships,
    ...options,
  });

  return useQuery(queryString, () =>
    swapiService.starship.getStarship(options)
  );
};
