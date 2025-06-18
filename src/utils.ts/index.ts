export const decodeHTMLEntities = (text: string): string => {
  const doc = new DOMParser().parseFromString(text, "text/html");
  if (!doc || !doc.documentElement) return text;
  return doc.documentElement.textContent ?? "";
}
