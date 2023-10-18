import { objectToSearchString } from "../../../helper/objectToSearchString";
import { FetchWrapper } from "../../../helper/requestWrapper";
import {
  GetStarshipPayload,
  PaginatedResource,
  Starship,
  StarshipApi,
} from "../Swapi.types";

const API_URL = "starships/";

export const starshipApi = (fetchWrapper: FetchWrapper) =>
  ({
    getStarship: (options: GetStarshipPayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return fetchWrapper.get<PaginatedResource<Starship>>(apiUrl);
    },
    getStartshipById: (id, name, model) => {
      const searchString = objectToSearchString({ name, model });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return fetchWrapper.get<Starship>(apiUrl);
    },
  } as StarshipApi);
