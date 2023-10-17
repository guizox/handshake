import { planetApi } from "./PlanetApi";
import { FetchWrapper } from "../../../helper/requestWrapper";
import { GetPlanetPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  FetchWrapper: jest.fn(),
}));

describe("planetApi", () => {
  let mockFetchWrapper: FetchWrapper;

  beforeEach(() => {
    mockFetchWrapper = {
      get: jest.fn(),
    } as unknown as FetchWrapper;
  });

  it("should call fetchWrapper.get for getPlanets", () => {
    const options = {} as GetPlanetPayload;
    const api = planetApi(mockFetchWrapper);
    api.getPlanets(options);
    const expectedUrl = "planets/?";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getPlanets with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
      page: "1",
    } as GetPlanetPayload;
    const api = planetApi(mockFetchWrapper);
    api.getPlanets(options);
    const expectedUrl = "planets/?model=someModel&name=someName&page=1";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getPlanetById with name", () => {
    const id = 123;
    const name = "SomeName";
    const api = planetApi(mockFetchWrapper);
    api.getPlanetById(id, name);
    const expectedUrl = `planets/${id}/search=${name}`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getPlanetById without name", () => {
    const id = 123;
    const api = planetApi(mockFetchWrapper);
    api.getPlanetById(id);
    const expectedUrl = `planets/${id}/`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
