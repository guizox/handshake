import { GetFilmPayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToSearchString } from "../helper/objectToSearchString";
import { apiCache } from "../constants/apiCache";

export const useFetchFilmsbyId = (id: number, title?: string) => {
  return useQuery(`${apiCache.films}-${id}-${title}`, () =>
    swapiService.films.getFilmsById(id, title)
  );
};

export const useFetchFilms = (options?: GetFilmPayload | undefined) => {
  const queryString = objectToSearchString({ api: apiCache.films, ...options });

  return useQuery(queryString, () => swapiService.films.getFilms(options));
};
