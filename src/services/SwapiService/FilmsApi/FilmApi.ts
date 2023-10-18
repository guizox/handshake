import { RequestWrapper } from "../../../helper/requestWrapper";
import {
  Film,
  FilmsApi,
  GetFilmPayload,
  PaginatedResource,
} from "../Swapi.types";
import { objectToSearchString } from "../../../helper/objectToSearchString";

const API_URL = "films/";

export const filmsApi = (requestWrapper: RequestWrapper) =>
  ({
    getFilms: (options: GetFilmPayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return requestWrapper.get<PaginatedResource<Film>>(apiUrl);
    },
    getFilmsById: (id: number, title = "") => {
      const searchString = objectToSearchString({ title });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return requestWrapper.get<Film>(apiUrl);
    },
  } as FilmsApi);
