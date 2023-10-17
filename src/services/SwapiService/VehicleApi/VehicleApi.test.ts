import { vehicleApi } from "./VehicleApi"; // Update the import path accordingly
import { FetchWrapper } from "../../../helper/requestWrapper";
import { GetVehiclePayload, PaginatedResource, Vehicle } from "../Swapi.types";

describe("vehicleApi", () => {
  let mockFetchWrapper: FetchWrapper;

  beforeEach(() => {
    mockFetchWrapper = {
      get: jest.fn(),
    } as unknown as FetchWrapper;
  });

  it("should call fetchWrapper.get for getVehicles", () => {
    const options = {} as GetVehiclePayload;
    const api = vehicleApi(mockFetchWrapper);
    api.getVehicles(options);
    const expectedUrl = "vehicles/?";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getVehicles with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetVehiclePayload;
    const api = vehicleApi(mockFetchWrapper);
    api.getVehicles(options);
    const expectedUrl = "vehicles/?search=someModel,someName";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getVehiclesById with name and model", () => {
    const id = 123;
    const name = "SomeName";
    const model = "SomeModel";
    const api = vehicleApi(mockFetchWrapper);
    api.getVehiclesById(id, name, model);
    const expectedUrl = `vehicles/${id}/search=${name},${model}`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getVehiclesById with only id", () => {
    const id = 123;
    const api = vehicleApi(mockFetchWrapper);
    api.getVehiclesById(id, "", "");
    const expectedUrl = `vehicles/${id}/`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
