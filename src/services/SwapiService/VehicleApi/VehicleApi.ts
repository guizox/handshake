import { objectToQueryString } from "../../../helper/objectToQueryString";
import { FetchWrapper } from "../../../helper/requestWrapper";
import {
  GetVehiclePayload,
  PaginatedResource,
  Vehicle,
  VehicleApi,
} from "../Swapi.types";

const API_URL = "vehicles/";

export const vehicleApi = (fetchWrapper: FetchWrapper) =>
  ({
    getVehicles: (options: GetVehiclePayload) => {
      const queryString = objectToQueryString(options);
      const apiUrl = `${API_URL}?${queryString}`;

      return fetchWrapper.get<PaginatedResource<Vehicle>>(apiUrl);
    },
    getVehiclesById: (id: number, name: string, model: string) => {
      const search = [];
      if (name) {
        search.push(name);
      }

      if (model) {
        search.push(model);
      }

      const searchString = search.length ? `search=${search.toString()}` : "";

      const apiUrl = `${API_URL}${id}/${searchString}`;

      return fetchWrapper.get<Vehicle>(apiUrl);
    },
  } as VehicleApi);
