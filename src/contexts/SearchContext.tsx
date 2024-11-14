import React, { useState, createContext } from "react";

interface SearchContextType {
  search: string
  setSearch: (search: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [search, setSearch] = useState<string>("");

  return <SearchContext.Provider value={{ search, setSearch }}>
    {children}
  </SearchContext.Provider>
};

export { SearchContext };