import { objectToQueryString } from "../../../helper/objectToQueryString";
import { FetchWrapper } from "../../../helper/requestWrapper";
import {
  GetPeoplePayload,
  PaginatedResource,
  People,
  PeopleApi,
} from "../Swapi.types";

const API_URL = "people/";

export const peopleApi = (fetchWrapper: FetchWrapper) =>
  ({
    getPeople: (options: GetPeoplePayload) => {
      const queryString = objectToQueryString(options);
      const apiUrl = `${API_URL}?${queryString}`;

      return fetchWrapper.get<PaginatedResource<People>>(apiUrl);
    },
    getPeopleById: (id: number, name = "") => {
      const apiUrl = `${API_URL}${id}/${name ? `search=${name}` : ""}`;
      return fetchWrapper.get<People>(apiUrl);
    },
  } as PeopleApi);
