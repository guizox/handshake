import { objectToSearchString } from "../../../helper/objectToSearchString";
import { RequestWrapper } from "../../../helper/requestWrapper";
import {
  GetPeoplePayload,
  PaginatedResource,
  People,
  PeopleApi,
} from "../Swapi.types";

const API_URL = "people/";

export const peopleApi = (requestWrapper: RequestWrapper) =>
  ({
    getPeople: async (options: GetPeoplePayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      const result = await requestWrapper.get<PaginatedResource<People>>(
        apiUrl
      );

      return result;
    },
    getPeopleById: (id: number, name = "") => {
      const searchString = objectToSearchString({ name });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return requestWrapper.get<People>(apiUrl);
    },
  } as PeopleApi);
