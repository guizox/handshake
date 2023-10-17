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

export interface PaginatedResource<T> {
  count: number;
  next: string | null;
  previous: null | string;
  results: T[];
}

export type PeopleApi = {
  getPeople: (name?: string) => Promise<PaginatedResource<People>>;
  getPeopleById: (id: number, name?: string) => Promise<People>;
};

export type FilmsApi = {
  getFilms: (title?: string) => Promise<PaginatedResource<Film>>;
  getFilmsById: (id: number, title?: string) => Promise<Film>;
};

export type SwapiService = {
  people: PeopleApi;
  title: FilmsApi;
};
