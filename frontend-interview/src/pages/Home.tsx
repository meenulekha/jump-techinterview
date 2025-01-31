import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";

export default function Home() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setResults(
        data.docs.slice(0, 5).map((doc: any) => ({
          key: doc.key,
          title: doc.title,
          description: doc.author_name?.[0] || "",
        }))
      );
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#e5f7f7] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <SearchForm onSearch={handleSearch} />
        <ResultsList results={results} />
      </div>
    </main>
  );
}
