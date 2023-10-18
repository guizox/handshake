import { PaginationOptions } from "@/services/SwapiService/Swapi.types";

export function objectToSearchString<T>(obj?: Partial<T>): string {
  const objectValues = obj || {};
  let initialString = "";
  const { page, ...rest } = objectValues as PaginationOptions;

  if (page) {
    initialString += `page=${page}`;
  }

  const values = Object.values(rest as Object).filter(Boolean);
  if (!values.length) {
    return `${initialString}`;
  }

  if (initialString.length > 0) {
    initialString += "&";
  }

  return `${initialString}search=${values.toString()}`;
}
