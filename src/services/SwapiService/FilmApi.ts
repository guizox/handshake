import { FetchWrapper } from "@/helper/requestWrapper";
import {
  Film,
  FilmsApi,
  GetFilmPayload,
  PaginatedResource,
} from "./Swapi.types";
import { objectToQueryString } from "@/helper/objectToQueryString";

const API_URL = "people/";

export const titleApi = (fetchWrapper: FetchWrapper) =>
  ({
    getFilms: (options: GetFilmPayload) => {
      const queryString = objectToQueryString(options);
      const apiUrl = `${API_URL}${queryString}`;

      return fetchWrapper.get<PaginatedResource<Film>>(apiUrl);
    },
    getFilmsById: (id: number, title = "") => {
      const apiUrl = `${API_URL}/${id}/${title ? `search=${title}` : ""}`;
      return fetchWrapper.get<Film>(apiUrl);
    },
  } as FilmsApi);
