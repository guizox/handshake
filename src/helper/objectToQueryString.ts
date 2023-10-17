export function objectToQueryString<T>(obj?: Partial<T>): string {
  const keyValuePairs = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(obj[key] as string);
      keyValuePairs.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return keyValuePairs.join("&");
}
