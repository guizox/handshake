import { GetPeoplePayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToSearchString } from "../helper/objectToSearchString";
import { apiCache } from "../constants/apiCache";

export const useFetchPeopleById = (id: number, name?: string) => {
  return useQuery(`${apiCache.people}-${id}-${name}`, () =>
    swapiService.people.getPeopleById(id, name)
  );
};

export const useFetchPeople = (options?: GetPeoplePayload | undefined) => {
  const queryString = objectToSearchString({
    api: apiCache.people,
    ...options,
  });

  return useQuery(queryString, () => swapiService.people.getPeople(options));
};
