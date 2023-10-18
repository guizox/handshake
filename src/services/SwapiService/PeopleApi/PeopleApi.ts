import { objectToSearchString } from "../../../helper/objectToSearchString";
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
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return fetchWrapper.get<PaginatedResource<People>>(apiUrl);
    },
    getPeopleById: (id: number, name = "") => {
      const searchString = objectToSearchString({ name });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return fetchWrapper.get<People>(apiUrl);
    },
  } as PeopleApi);
