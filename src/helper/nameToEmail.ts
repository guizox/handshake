export const nameToEmail = (name: string) =>
  `${name
    .toLocaleLowerCase()
    .replace(/\s+/g, "_")
    .replace(/\-+/g, "_")}@school.edu`;
