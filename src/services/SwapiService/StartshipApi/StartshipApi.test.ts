import { starshipApi } from "./StartshipApi"; // Update the import path accordingly
import { RequestWrapper } from "../../../helper/requestWrapper";
import { GetStarshipPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  RequestWrapper: jest.fn(),
}));

describe("starshipApi", () => {
  let mockRequestWrapper: RequestWrapper;

  beforeEach(() => {
    mockRequestWrapper = {
      get: jest.fn(),
    } as unknown as RequestWrapper;
  });

  it("should call requestWrapper.get for getStarship", () => {
    const options = {} as GetStarshipPayload;
    const api = starshipApi(mockRequestWrapper);
    api.getStarship(options);
    const expectedUrl = "starships/";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getStarship with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetStarshipPayload;
    const api = starshipApi(mockRequestWrapper);
    api.getStarship(options);
    const expectedUrl = "starships/?search=someModel,someName";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getStartshipById with name and model", () => {
    const id = 123;
    const name = "SomeName";
    const model = "SomeModel";
    const api = starshipApi(mockRequestWrapper);
    api.getStartshipById(id, name, model);
    const expectedUrl = `starships/${id}/?search=${name},${model}`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getStartshipById with only id", () => {
    const id = 123;
    const api = starshipApi(mockRequestWrapper);
    api.getStartshipById(id, "", "");
    const expectedUrl = `starships/${id}/`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
