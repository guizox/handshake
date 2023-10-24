import { objectToSearchString } from "../../../helper/objectToSearchString";
import { RequestWrapper } from "../../../helper/requestWrapper";
import {
  GetPeoplePayload,
  PaginatedResource,
  People,
  PeopleApi,
} from "../Swapi.types";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { nameToEmail } from "../../../helper/nameToEmail";

const API_URL = "people/";

export type Student = {
  major: string;
  email: string;
  svg: string;
} & People;

const mapStudentList = (
  data: PaginatedResource<People>
): PaginatedResource<Student> => {
  return {
    ...data,
    results: data.results.map((item) => {
      const avatar = createAvatar(lorelei, {
        seed: item.name,
      });

      const svg = avatar.toString();
      return {
        ...item,
        email: nameToEmail(item.name),
        major: "major major",
        svg,
      };
    }),
  };
};

export const peopleApi = (requestWrapper: RequestWrapper) =>
  ({
    getPeople: async (options: GetPeoplePayload) => {
      debugger;
      const searchString = objectToSearchString(options);
      const apiUrl = `${API_URL}${
        searchString.length ? `?${searchString}` : ""
      }`;

      const result = await requestWrapper.get<PaginatedResource<People>>(
        apiUrl
      );

      return mapStudentList(result);
    },
    getPeopleById: (id: number, name = "") => {
      const searchString = objectToSearchString({ name });
      const apiUrl = `${API_URL}${id}/${
        searchString.length ? `?${searchString}` : ""
      }`;
      return requestWrapper.get<People>(apiUrl);
    },
  } as PeopleApi);
