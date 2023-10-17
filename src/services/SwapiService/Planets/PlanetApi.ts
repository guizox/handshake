import { objectToQueryString } from "../../../helper/objectToQueryString";
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
      const queryString = objectToQueryString(options);
      const apiUrl = `${API_URL}?${queryString}`;

      return fetchWrapper.get<PaginatedResource<Planet>>(apiUrl);
    },
    getPlanetById: (id: number, name = "") => {
      const apiUrl = `${API_URL}${id}/${name ? `search=${name}` : ""}`;
      return fetchWrapper.get<Planet>(apiUrl);
    },
  } as PlanetsApi);
