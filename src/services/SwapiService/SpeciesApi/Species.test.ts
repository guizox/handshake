import { speciesApi } from "./Species"; // Update the import path accordingly
import { FetchWrapper } from "../../../helper/requestWrapper";
import { GetSpeciesPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  FetchWrapper: jest.fn(),
}));

describe("speciesApi", () => {
  let mockFetchWrapper: FetchWrapper;

  beforeEach(() => {
    mockFetchWrapper = {
      get: jest.fn(),
    } as unknown as FetchWrapper;
  });

  it("should call fetchWrapper.get for getSpecies", () => {
    const options = {} as GetSpeciesPayload;
    const api = speciesApi(mockFetchWrapper);
    api.getSpecies(options);
    const expectedUrl = "species/?";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getSpecies with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetSpeciesPayload;
    const api = speciesApi(mockFetchWrapper);
    api.getSpecies(options);
    const expectedUrl = "species/?search=someModel,someName";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getSpeciesById with name", () => {
    const id = 123;
    const name = "SomeName";
    const api = speciesApi(mockFetchWrapper);
    api.getSpeciesById(id, name);
    const expectedUrl = `species/${id}/search=${name}`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getSpeciesById without name", () => {
    const id = 123;
    const api = speciesApi(mockFetchWrapper);
    api.getSpeciesById(id);
    const expectedUrl = `species/${id}/`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
