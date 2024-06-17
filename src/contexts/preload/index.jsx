import React, { useContext, useState, createContext } from "react";

const PreloadContext = createContext();

export default function PreloadProvider({ children }) {
  const [preloading, setPreloading] = useState(false);

  return (
    <PreloadContext.Provider value={{ preloading, setPreloading }}>
      {children}
    </PreloadContext.Provider>
  );
}

export function usePreload() {
  const context = useContext(PreloadContext);
  if (!context)
    throw new Error("usePreload must be used within a PreloadProvider");

  const { preloading, setPreloading } = context;

  return { preloading, setPreloading };
}
