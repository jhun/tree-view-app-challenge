import React, { useContext, useState, createContext, useEffect } from "react";

const CompaniesContext = createContext();

export default function CompaniesProvider({ children }) {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {}, [companies]);

  return (
    <CompaniesContext.Provider value={{ companies, setCompanies }}>
      {children}
    </CompaniesContext.Provider>
  );
}

export function useCompanies() {
  const context = useContext(CompaniesContext);
  if (!context)
    throw new Error("useCompanies must be used within a CompaniesProvider");

  const { companies, setCompanies } = context;

  return { companies, setCompanies };
}
