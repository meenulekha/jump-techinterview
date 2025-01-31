import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="relative w-full max-w-xl mx-auto bg-[#7cc7c7] rounded-2xl p-4 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <Search className="h-6 w-6 text-white" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent text-white placeholder-white/70 text-lg focus:outline-none"
        />
        {query && (
          <button onClick={() => setQuery("")} className="flex-shrink-0">
            <X className="h-6 w-6 text-white hover:text-white/70 transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
