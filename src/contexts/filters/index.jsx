import React, { useContext, useState, createContext, useEffect } from "react";

const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const [filterEnergy, setFilterEnergy] = useState(false);
  const [filterAlert, setFilterAlert] = useState(false);
  const [searchString, setSearchString] = useState("");

  return (
    <FiltersContext.Provider
      value={{
        filterEnergy,
        setFilterEnergy,
        filterAlert,
        setFilterAlert,
        searchString,
        setSearchString,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context)
    throw new Error("useFilters must be used within a FiltersProvider");

  const {
    filterEnergy,
    setFilterEnergy,
    filterAlert,
    setFilterAlert,
    searchString,
    setSearchString,
  } = context;

  return {
    filterEnergy,
    setFilterEnergy,
    filterAlert,
    setFilterAlert,
    searchString,
    setSearchString,
  };
}
