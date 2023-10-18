import { peopleApi } from "./PeopleApi";
import { RequestWrapper } from "../../../helper/requestWrapper";
import { GetPeoplePayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  RequestWrapper: jest.fn(),
}));

describe("peopleApi", () => {
  let mockRequestWrapper: RequestWrapper;

  beforeEach(() => {
    mockRequestWrapper = {
      get: jest.fn(),
    } as unknown as RequestWrapper;
  });

  it("should call requestWrapper.get for getPeople", () => {
    const options = {} as GetPeoplePayload;
    const api = peopleApi(mockRequestWrapper);
    api.getPeople(options);
    const expectedUrl = "people/";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getPeople with different options", () => {
    const options = {
      model: "someModel",
      name: "someName",
    } as GetPeoplePayload;
    const api = peopleApi(mockRequestWrapper);
    api.getPeople(options);
    const expectedUrl = "people/?search=someModel,someName";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getPeopleById with name", () => {
    const id = 123;
    const name = "SomeName";
    const api = peopleApi(mockRequestWrapper);
    api.getPeopleById(id, name);
    const expectedUrl = `people/${id}/?search=${name}`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getPeopleById without name", () => {
    const id = 123;
    const api = peopleApi(mockRequestWrapper);
    api.getPeopleById(id);
    const expectedUrl = `people/${id}/`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
