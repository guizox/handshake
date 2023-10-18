import { SwapiService } from "./Swapi.types";
import { peopleApi } from "./PeopleApi/PeopleApi";
import { filmsApi } from "./FilmsApi/FilmApi";
import { RequestWrapper } from "../../helper/requestWrapper";
import { starshipApi } from "./StartshipApi/StartshipApi";
import { vehicleApi } from "./VehicleApi/VehicleApi";
import { speciesApi } from "./SpeciesApi/Species";
import { planetApi } from "./Planets/PlanetApi";

const BASE_URL = "http://swapi.dev/api";
const requestWrapper = new RequestWrapper(BASE_URL);

export const swapiService: SwapiService = {
  people: peopleApi(requestWrapper),
  films: filmsApi(requestWrapper),
  starship: starshipApi(requestWrapper),
  vehicle: vehicleApi(requestWrapper),
  species: speciesApi(requestWrapper),
  planets: planetApi(requestWrapper),
};
