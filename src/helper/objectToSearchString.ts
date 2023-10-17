export function objectToSearchString<T>(obj: Partial<T> = {}): string {
  const values = Object.values(obj as Object).filter(Boolean);
  if (!values.length) {
    return "";
  }

  return `search=${values.toString()}`;
}
