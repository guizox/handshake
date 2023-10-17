import { GetVehiclePayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToQueryString } from "../helper/objectToQueryString";
import { apiCache } from "../constants/apiCache";

export const useGetVehicleById = (id: number, name?: string) => {
  return useQuery(`${apiCache.vehicles}-${id}-${name}`, () =>
    swapiService.vehicle.getVehiclesById(id, name)
  );
};

export const useGetVehicles = (options?: GetVehiclePayload | undefined) => {
  const queryString = objectToQueryString({
    api: apiCache.vehicles,
    ...options,
  });

  return useQuery(queryString, () => swapiService.vehicle.getVehicles(options));
};
