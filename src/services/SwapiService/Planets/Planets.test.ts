import { planetApi } from "./PlanetApi";
import { RequestWrapper } from "../../../helper/requestWrapper";
import { GetPlanetPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  RequestWrapper: jest.fn(),
}));

describe("planetApi", () => {
  let mockRequestWrapper: RequestWrapper;

  beforeEach(() => {
    mockRequestWrapper = {
      get: jest.fn(),
    } as unknown as RequestWrapper;
  });

  it("should call requestWrapper.get for getPlanets", () => {
    const options = {} as GetPlanetPayload;
    const api = planetApi(mockRequestWrapper);
    api.getPlanets(options);
    const expectedUrl = "planets/";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getPlanets with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetPlanetPayload;
    const api = planetApi(mockRequestWrapper);
    api.getPlanets(options);
    const expectedUrl = "planets/?search=someModel,someName";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getPlanetById with name", () => {
    const id = 123;
    const name = "SomeName";
    const api = planetApi(mockRequestWrapper);
    api.getPlanetById(id, name);
    const expectedUrl = `planets/${id}/?search=${name}`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getPlanetById without name", () => {
    const id = 123;
    const api = planetApi(mockRequestWrapper);
    api.getPlanetById(id);
    const expectedUrl = `planets/${id}/`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
