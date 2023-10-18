import { objectToSearchString } from "../../../helper/objectToSearchString";
import { RequestWrapper } from "../../../helper/requestWrapper";
import {
  GetPlanetPayload,
  PaginatedResource,
  Planet,
  PlanetsApi,
} from "../Swapi.types";

const API_URL = "planets/";

export const planetApi = (requestWrapper: RequestWrapper) =>
  ({
    getPlanets: (options: GetPlanetPayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return requestWrapper.get<PaginatedResource<Planet>>(apiUrl);
    },
    getPlanetById: (id: number, name = "") => {
      const searchString = objectToSearchString({ name });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return requestWrapper.get<Planet>(apiUrl);
    },
  } as PlanetsApi);
