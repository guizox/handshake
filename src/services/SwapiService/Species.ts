import { objectToQueryString } from "@/helper/objectToQueryString";
import { FetchWrapper } from "../../helper/requestWrapper";
import {
  GetSpeciesPayload,
  PaginatedResource,
  Species,
  SpeciesApi,
} from "./Swapi.types";

const API_URL = "species/";

export const speciesApi = (fetchWrapper: FetchWrapper) =>
  ({
    getSpecies: (options: GetSpeciesPayload) => {
      const queryString = objectToQueryString(options);
      const apiUrl = `${API_URL}${queryString}`;

      return fetchWrapper.get<PaginatedResource<Species>>(apiUrl);
    },
    getSpeciesById: (id: number, name = "") => {
      const apiUrl = `${API_URL}/${id}/${name ? `search=${name}` : ""}`;
      return fetchWrapper.get<Species>(apiUrl);
    },
  } as SpeciesApi);
