import { filmsApi } from "./FilmApi";
import { RequestWrapper } from "../../../helper/requestWrapper";
import { GetFilmPayload } from "../Swapi.types";

jest.mock("../../../helper/requestWrapper", () => ({
  RequestWrapper: jest.fn(),
}));

describe("filmsApi", () => {
  let mockRequestWrapper: RequestWrapper;

  beforeEach(() => {
    mockRequestWrapper = {
      get: jest.fn(),
    } as unknown as RequestWrapper;
  });

  it("should call requestWrapper.get for getFilms", () => {
    const options = {} as GetFilmPayload;
    const api = filmsApi(mockRequestWrapper);
    api.getFilms(options);
    const expectedUrl = "films/";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getFilms with different options", () => {
    const options = {
      model: "someModel",
      title: "someTitle",
    } as GetFilmPayload;
    const api = filmsApi(mockRequestWrapper);
    api.getFilms(options);
    const expectedUrl = "films/?search=someModel,someTitle";
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getFilmsById with title", () => {
    const id = 123;
    const title = "SomeTitle";
    const api = filmsApi(mockRequestWrapper);
    api.getFilmsById(id, title);
    const expectedUrl = `films/${id}/?search=${title}`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should call requestWrapper.get for getFilmsById without title", () => {
    const id = 123;
    const api = filmsApi(mockRequestWrapper);
    api.getFilmsById(id);
    const expectedUrl = `films/${id}/`;
    expect(mockRequestWrapper.get).toHaveBeenCalledWith(expectedUrl);
  });
});
