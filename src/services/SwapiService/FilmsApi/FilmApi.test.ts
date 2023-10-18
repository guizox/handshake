import { filmsApi } from "./FilmApi";
import { FetchWrapper } from "../../../helper/requestWrapper";
import { GetFilmPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  FetchWrapper: jest.fn(),
}));

describe("filmsApi", () => {
  let mockFetchWrapper: FetchWrapper;

  beforeEach(() => {
    mockFetchWrapper = {
      get: jest.fn(),
    } as unknown as FetchWrapper;
  });

  it("should call fetchWrapper.get for getFilms", () => {
    const options = {} as GetFilmPayload;
    const api = filmsApi(mockFetchWrapper);
    api.getFilms(options);
    const expectedUrl = "films/";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getFilms with different options", () => {
    const options = {
      model: "someModel",
      title: "someTitle",
    } as GetFilmPayload;
    const api = filmsApi(mockFetchWrapper);
    api.getFilms(options);
    const expectedUrl = "films/?search=someModel,someTitle";
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getFilmsById with title", () => {
    const id = 123;
    const title = "SomeTitle";
    const api = filmsApi(mockFetchWrapper);
    api.getFilmsById(id, title);
    const expectedUrl = `films/${id}/?search=${title}`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call fetchWrapper.get for getFilmsById without title", () => {
    const id = 123;
    const api = filmsApi(mockFetchWrapper);
    api.getFilmsById(id);
    const expectedUrl = `films/${id}/`;
    expect(mockFetchWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
