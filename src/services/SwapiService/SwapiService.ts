import { SwapiService } from "./Swapi.types";
import { peopleApi } from "./PeopleApi";
import { titleApi } from "./FilmApi";
import { FetchWrapper } from "../../helper/requestWrapper";
import { starshipApi } from "./StartshipApi";

const BASE_URL = "https://swapi.dev/api";
const fetchWrapper = new FetchWrapper(BASE_URL);

export const swapiService: SwapiService = {
  people: peopleApi(fetchWrapper),
  title: titleApi(fetchWrapper),
  starship: starshipApi(fetchWrapper),
};
