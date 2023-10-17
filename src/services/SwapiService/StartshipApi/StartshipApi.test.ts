import { starshipApi } from "./StartshipApi"; // Update the import path accordingly
import { FetchWrapper } from "../../../helper/requestWrapper";
import { GetStarshipPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  FetchWrapper: jest.fn(),
}));

describe("starshipApi", () => {
  let mockFetchWrapper: FetchWrapper;

  beforeEach(() => {
    mockFetchWrapper = {
      get: jest.fn(),
    } as unknown as FetchWrapper;
  });

  it("should call fetchWrapper.get for getStarship", () => {
    const options = {} as GetStarshipPayload;
    const api = starshipApi(mockFetchWrapper);
    api.getStarship(options);
    const expectedUrl = "starships/?";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getStarship with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetStarshipPayload;
    const api = starshipApi(mockFetchWrapper);
    api.getStarship(options);
    const expectedUrl = "starships/?search=someModel,someName";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getStartshipById with name and model", () => {
    const id = 123;
    const name = "SomeName";
    const model = "SomeModel";
    const api = starshipApi(mockFetchWrapper);
    api.getStartshipById(id, name, model);
    const expectedUrl = `starships/${id}/search=${name},${model}`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getStartshipById with only id", () => {
    const id = 123;
    const api = starshipApi(mockFetchWrapper);
    api.getStartshipById(id, "", "");
    const expectedUrl = `starships/${id}/`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
