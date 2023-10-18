import { objectToSearchString } from "../../../helper/objectToSearchString";
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
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return fetchWrapper.get<PaginatedResource<Vehicle>>(apiUrl);
    },
    getVehiclesById: (id: number, name: string, model: string) => {
      const searchString = objectToSearchString({ name, model });

      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;

      return fetchWrapper.get<Vehicle>(apiUrl);
    },
  } as VehicleApi);
