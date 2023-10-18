import { objectToSearchString } from "./objectToSearchString";

describe("objectToSearchString", () => {
  it("should set initialString with page when page is passed", () => {
    const result = objectToSearchString({ page: 1 });
    expect(result).toBe(`page=1`);
  });

  it("should set use page and other parameter", () => {
    const result = objectToSearchString({ page: 1, test: "testParameter" });
    expect(result).toBe(`page=1&search=testParameter`);
  });

  it("should return an empty string for an empty object", () => {
    const result = objectToSearchString({});
    expect(result).toBe("");
    const newResult = objectToSearchString();
    expect(newResult).toBe("");
  });

  it("should create a search string for a non-empty object", () => {
    const obj = {
      name: "John Doe",
      age: 30,
    };
    const result = objectToSearchString(obj);
    expect(result).toBe("search=John Doe,30");
  });

  it("should handle partial objects", () => {
    const obj = {
      name: "John Doe",
      age: undefined,
    };
    const result = objectToSearchString(obj);
    expect(result).toBe("search=John Doe");
  });

  it("should handle an array property", () => {
    const obj = {
      interests: ["music", "sports"],
    };
    const result = objectToSearchString(obj);
    expect(result).toBe("search=music,sports");
  });

  it("should handle an array property with empty values", () => {
    const obj = {
      interests: ["", "sports", ""],
    };
    const result = objectToSearchString(obj);
    expect(result).toBe("search=,sports,");
  });
});
