import { objectToSearchString } from "../../../helper/objectToSearchString";
import { FetchWrapper } from "../../../helper/requestWrapper";
import {
  GetPlanetPayload,
  PaginatedResource,
  Planet,
  PlanetsApi,
} from "../Swapi.types";

const API_URL = "planets/";

export const planetApi = (fetchWrapper: FetchWrapper) =>
  ({
    getPlanets: (options: GetPlanetPayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return fetchWrapper.get<PaginatedResource<Planet>>(apiUrl);
    },
    getPlanetById: (id: number, name = "") => {
      const searchString = objectToSearchString({ name });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return fetchWrapper.get<Planet>(apiUrl);
    },
  } as PlanetsApi);
