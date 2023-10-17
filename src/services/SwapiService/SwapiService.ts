import { SwapiService } from "./Swapi.types";
import { peopleApi } from "./PeopleApi/PeopleApi";
import { filmsApi } from "./FilmsApi/FilmApi";
import { FetchWrapper } from "../../helper/requestWrapper";
import { starshipApi } from "./StartshipApi/StartshipApi";
import { vehicleApi } from "./VehicleApi/VehicleApi";
import { speciesApi } from "./SpeciesApi/Species";
import { planetApi } from "./Planets/PlanetApi";

const BASE_URL = "https://swapi.dev/api";
const fetchWrapper = new FetchWrapper(BASE_URL);

export const swapiService: SwapiService = {
  people: peopleApi(fetchWrapper),
  films: filmsApi(fetchWrapper),
  starship: starshipApi(fetchWrapper),
  vehicle: vehicleApi(fetchWrapper),
  species: speciesApi(fetchWrapper),
  planets: planetApi(fetchWrapper),
};
