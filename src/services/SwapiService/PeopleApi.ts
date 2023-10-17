import { FetchWrapper } from "@/helper/requestWrapper";
import { PaginatedResource, People, PeopleApi } from "./Swapi.types";

const API_URL = "people/";

export const peopleApi = (fetchWrapper: FetchWrapper) =>
  ({
    getPeople: (name = "") => {
      const apiUrl = `${API_URL}${name ? `?search=${name}` : ""}`;

      return fetchWrapper.get<PaginatedResource<People>>(apiUrl);
    },
    getPeopleById: (id: number, name = "") => {
      const apiUrl = `${API_URL}/${id}/${name ? `search=${name}` : ""}`;
      return fetchWrapper.get<People>(apiUrl);
    },
  } as PeopleApi);
