export enum LocalStorageKeys {
  Page = "page",
  Student = "Student",
}

export const readFromStorage = <T>(
  key: LocalStorageKeys,
  initialValue: unknown
): T => {
  return (
    typeof window !== "undefined"
      ? typeof window !== "undefined" && window.localStorage.getItem(key)
        ? window.localStorage.getItem(key)
        : initialValue
      : initialValue
  ) as T;
};
