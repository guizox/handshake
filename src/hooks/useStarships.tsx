import { GetStarshipPayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToQueryString } from "../helper/objectToQueryString";
import { apiCache } from "../constants/apiCache";

export const useGetStartshipsById = (id: number, name?: string) => {
  return useQuery(`${apiCache.startships}-${id}-${name}`, () =>
    swapiService.starship.getStartshipById(id, name)
  );
};

export const useGetStarships = (options?: GetStarshipPayload | undefined) => {
  const queryString = objectToQueryString({
    api: apiCache.startships,
    ...options,
  });

  return useQuery(queryString, () =>
    swapiService.starship.getStarship(options)
  );
};
