import { objectToSearchString } from "../../../helper/objectToSearchString";
import { RequestWrapper } from "../../../helper/requestWrapper";
import {
  GetSpeciesPayload,
  PaginatedResource,
  Species,
  SpeciesApi,
} from "../Swapi.types";

const API_URL = "species/";

export const speciesApi = (requestWrapper: RequestWrapper) =>
  ({
    getSpecies: (options: GetSpeciesPayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return requestWrapper.get<PaginatedResource<Species>>(apiUrl);
    },
    getSpeciesById: (id: number, name = "") => {
      const searchString = objectToSearchString({ name });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return requestWrapper.get<Species>(apiUrl);
    },
  } as SpeciesApi);
