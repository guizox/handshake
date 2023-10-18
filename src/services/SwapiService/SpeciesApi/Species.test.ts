import { speciesApi } from "./Species"; // Update the import path accordingly
import { RequestWrapper } from "../../../helper/requestWrapper";
import { GetSpeciesPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  RequestWrapper: jest.fn(),
}));

describe("speciesApi", () => {
  let mockRequestWrapper: RequestWrapper;

  beforeEach(() => {
    mockRequestWrapper = {
      get: jest.fn(),
    } as unknown as RequestWrapper;
  });

  it("should call requestWrapper.get for getSpecies", () => {
    const options = {} as GetSpeciesPayload;
    const api = speciesApi(mockRequestWrapper);
    api.getSpecies(options);
    const expectedUrl = "species/";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getSpecies with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetSpeciesPayload;
    const api = speciesApi(mockRequestWrapper);
    api.getSpecies(options);
    const expectedUrl = "species/?search=someModel,someName";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getSpeciesById with name", () => {
    const id = 123;
    const name = "SomeName";
    const api = speciesApi(mockRequestWrapper);
    api.getSpeciesById(id, name);
    const expectedUrl = `species/${id}/?search=${name}`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getSpeciesById without name", () => {
    const id = 123;
    const api = speciesApi(mockRequestWrapper);
    api.getSpeciesById(id);
    const expectedUrl = `species/${id}/`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
