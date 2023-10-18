import { FetchWrapper } from "../../../helper/requestWrapper";
import {
  Film,
  FilmsApi,
  GetFilmPayload,
  PaginatedResource,
} from "../Swapi.types";
import { objectToSearchString } from "../../../helper/objectToSearchString";

const API_URL = "films/";

export const filmsApi = (fetchWrapper: FetchWrapper) =>
  ({
    getFilms: (options: GetFilmPayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return fetchWrapper.get<PaginatedResource<Film>>(apiUrl);
    },
    getFilmsById: (id: number, title = "") => {
      const searchString = objectToSearchString({ title });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return fetchWrapper.get<Film>(apiUrl);
    },
  } as FilmsApi);
