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
      const queryString = objectToSearchString(options);
      const apiUrl = `${API_URL}?${queryString}`;

      return fetchWrapper.get<PaginatedResource<Film>>(apiUrl);
    },
    getFilmsById: (id: number, title = "") => {
      const apiUrl = `${API_URL}${id}/${title ? `search=${title}` : ""}`;
      return fetchWrapper.get<Film>(apiUrl);
    },
  } as FilmsApi);
