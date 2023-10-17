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
      const queryString = objectToSearchString(options);
      const apiUrl = `${API_URL}?${queryString}`;

      return fetchWrapper.get<PaginatedResource<Starship>>(apiUrl);
    },
    getStartshipById: (id, name, model) => {
      const search = [];
      if (name) {
        search.push(name);
      }

      if (model) {
        search.push(model);
      }

      const searchString = search.length ? `search=${search.toString()}` : "";

      const apiUrl = `${API_URL}${id}/${searchString}`;

      return fetchWrapper.get<Starship>(apiUrl);
    },
  } as StarshipApi);
