import { objectToSearchString } from "../../../helper/objectToSearchString";
import { FetchWrapper } from "../../../helper/requestWrapper";
import {
  GetSpeciesPayload,
  PaginatedResource,
  Species,
  SpeciesApi,
} from "../Swapi.types";

const API_URL = "species/";

export const speciesApi = (fetchWrapper: FetchWrapper) =>
  ({
    getSpecies: (options: GetSpeciesPayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return fetchWrapper.get<PaginatedResource<Species>>(apiUrl);
    },
    getSpeciesById: (id: number, name = "") => {
      const searchString = objectToSearchString({ name });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return fetchWrapper.get<Species>(apiUrl);
    },
  } as SpeciesApi);
