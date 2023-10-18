import { vehicleApi } from "./VehicleApi"; // Update the import path accordingly
import { RequestWrapper } from "../../../helper/requestWrapper";
import { GetVehiclePayload, PaginatedResource, Vehicle } from "../Swapi.types";

describe("vehicleApi", () => {
  let mockRequestWrapper: RequestWrapper;

  beforeEach(() => {
    mockRequestWrapper = {
      get: jest.fn(),
    } as unknown as RequestWrapper;
  });

  it("should call requestWrapper.get for getVehicles", () => {
    const options = {} as GetVehiclePayload;
    const api = vehicleApi(mockRequestWrapper);
    api.getVehicles(options);
    const expectedUrl = "vehicles/";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getVehicles with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetVehiclePayload;
    const api = vehicleApi(mockRequestWrapper);
    api.getVehicles(options);
    const expectedUrl = "vehicles/?search=someModel,someName";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getVehiclesById with name and model", () => {
    const id = 123;
    const name = "SomeName";
    const model = "SomeModel";
    const api = vehicleApi(mockRequestWrapper);
    api.getVehiclesById(id, name, model);
    const expectedUrl = `vehicles/${id}/?search=${name},${model}`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getVehiclesById with only id", () => {
    const id = 123;
    const api = vehicleApi(mockRequestWrapper);
    api.getVehiclesById(id, "", "");
    const expectedUrl = `vehicles/${id}/`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
