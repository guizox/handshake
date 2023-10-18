import { objectToSearchString } from "../../../helper/objectToSearchString";
import { RequestWrapper } from "../../../helper/requestWrapper";
import {
  GetVehiclePayload,
  PaginatedResource,
  Vehicle,
  VehicleApi,
} from "../Swapi.types";

const API_URL = "vehicles/";

export const vehicleApi = (requestWrapper: RequestWrapper) =>
  ({
    getVehicles: (options: GetVehiclePayload) => {
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      return requestWrapper.get<PaginatedResource<Vehicle>>(apiUrl);
    },
    getVehiclesById: (id: number, name: string, model: string) => {
      const searchString = objectToSearchString({ name, model });

      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;

      return requestWrapper.get<Vehicle>(apiUrl);
    },
  } as VehicleApi);
