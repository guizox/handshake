import { FetchWrapper } from "@/helper/requestWrapper";
import { Film, FilmsApi, PaginatedResource } from "./Swapi.types";

const API_URL = "people/";

export const titleApi = (fetchWrapper: FetchWrapper) =>
  ({
    getFilms: (title = "") => {
      const apiUrl = `${API_URL}${title ? `?search=${title}` : ""}`;

      return fetchWrapper.get<PaginatedResource<Film>>(apiUrl);
    },
    getFilmsById: (id: number, title = "") => {
      const apiUrl = `${API_URL}/${id}/${title ? `search=${title}` : ""}`;
      return fetchWrapper.get<Film>(apiUrl);
    },
  } as FilmsApi);
