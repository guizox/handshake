import { GetVehiclePayload } from "../services/SwapiService/Swapi.types";
import { swapiService } from "../services/SwapiService/SwapiService";
import { useQuery } from "react-query";
import { objectToSearchString } from "../helper/objectToSearchString";
import { apiCache } from "../constants/apiCache";

export const useFetchVehicleById = (
  id: number,
  name?: string,
  model?: string
) => {
  return useQuery(`${apiCache.vehicles}-${id}-${name}-${model}`, () =>
    swapiService.vehicle.getVehiclesById(id, name, model)
  );
};

export const useFetchVehicles = (options?: GetVehiclePayload | undefined) => {
  const queryString = objectToSearchString({
    api: apiCache.vehicles,
    ...options,
  });

  return useQuery(queryString, () => swapiService.vehicle.getVehicles(options));
};
