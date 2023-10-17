import { GetPeoplePayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToQueryString } from "../helper/objectToQueryString";
import { apiCache } from "../constants/apiCache";

export const useGetPeopleById = (id: number, name?: string) => {
  return useQuery(`${apiCache.people}-${id}-${name}`, () =>
    swapiService.people.getPeopleById(id, name)
  );
};

export const useGetPeople = (options?: GetPeoplePayload | undefined) => {
  const queryString = objectToQueryString({ api: apiCache.people, ...options });

  return useQuery(queryString, () => swapiService.people.getPeople(options));
};
