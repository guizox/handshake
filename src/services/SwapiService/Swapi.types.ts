export interface People {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface Film {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: any[];
  starship_class: string;
  url: string;
}

export interface Vehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: any[];
  films: string[];
  url: string;
  vehicle_class: string;
}

export interface Species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
  url: string;
}

export interface Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface PaginatedResource<T> {
  count: number;
  next: string | null;
  previous: null | string;
  results: T[];
}

export interface PaginationOptions {
  page: string;
}

export type GetPeoplePayload = {
  name: string;
} & PaginationOptions;

export type PeopleApi = {
  getPeople: (options?: GetPeoplePayload) => Promise<PaginatedResource<People>>;
  getPeopleById: (id: number, name?: string) => Promise<People>;
};

export type GetFilmPayload = {
  title: string;
} & PaginationOptions;

export type FilmsApi = {
  getFilms: (options?: GetFilmPayload) => Promise<PaginatedResource<Film>>;
  getFilmsById: (id: number, title?: GetFilmPayload["title"]) => Promise<Film>;
};

export type GetStarshipPayload = {
  name: string;
  model: string;
} & PaginationOptions;

export type StarshipApi = {
  getStarship: (
    options?: GetStarshipPayload
  ) => Promise<PaginatedResource<Starship>>;
  getStartshipById: (
    id: number,
    name?: GetStarshipPayload["name"],
    model?: GetStarshipPayload["model"]
  ) => Promise<Starship>;
};

export type GetVehiclePayload = {
  name: string;
  model: string;
} & PaginationOptions;

export type VehicleApi = {
  getVehicles: (
    options?: GetVehiclePayload
  ) => Promise<PaginatedResource<Vehicle>>;
  getVehiclesById: (
    id: number,
    name?: GetVehiclePayload["name"],
    model?: GetVehiclePayload["model"]
  ) => Promise<Vehicle>;
};

export type GetSpeciesPayload = {
  name: string;
} & PaginationOptions;

export type SpeciesApi = {
  getSpecies: (
    options?: GetSpeciesPayload
  ) => Promise<PaginatedResource<Species>>;
  getSpeciesById: (id: number, name?: string) => Promise<Species>;
};

export type GetPlanetPayload = {
  name: string;
} & PaginationOptions;

export type PlanetsApi = {
  getPlanets: (
    options?: GetPlanetPayload
  ) => Promise<PaginatedResource<Planet>>;
  getPlanetById: (id: number, name?: string) => Promise<Planet>;
};

export type SwapiService = {
  people: PeopleApi;
  title: FilmsApi;
  starship: StarshipApi;
  vehicle: VehicleApi;
  species: SpeciesApi;
  planets: PlanetsApi;
};
