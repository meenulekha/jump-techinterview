const BASE_URL = "https://openlibrary.org/search.json";

export const searchBooks = async (query: string) => {
  const response = await fetch(`${BASE_URL}?q=${query}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
