import { peopleApi } from "./PeopleApi";
import { FetchWrapper } from "../../../helper/requestWrapper";
import { GetPeoplePayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  FetchWrapper: jest.fn(),
}));

describe("peopleApi", () => {
  let mockFetchWrapper: FetchWrapper;

  beforeEach(() => {
    mockFetchWrapper = {
      get: jest.fn(),
    } as unknown as FetchWrapper;
  });

  it("should call fetchWrapper.get for getPeople", () => {
    const options = {} as GetPeoplePayload;
    const api = peopleApi(mockFetchWrapper);
    api.getPeople(options);
    const expectedUrl = "people/";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getPeople with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetPeoplePayload;
    const api = peopleApi(mockFetchWrapper);
    api.getPeople(options);
    const expectedUrl = "people/?search=someModel,someName";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getPeopleById with name", () => {
    const id = 123;
    const name = "SomeName";
    const api = peopleApi(mockFetchWrapper);
    api.getPeopleById(id, name);
    const expectedUrl = `people/${id}/?search=${name}`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getPeopleById without name", () => {
    const id = 123;
    const api = peopleApi(mockFetchWrapper);
    api.getPeopleById(id);
    const expectedUrl = `people/${id}/`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
