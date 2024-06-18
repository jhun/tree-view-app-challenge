import React, { useContext, useState, createContext, useEffect } from "react";

const AssetContext = createContext();

export default function AssetProvider({ children }) {
  const [asset, setAsset] = useState([]);
  useEffect(() => {}, [asset]);

  return (
    <AssetContext.Provider value={{ asset, setAsset }}>
      {children}
    </AssetContext.Provider>
  );
}

export function useAsset() {
  const context = useContext(AssetContext);
  if (!context) throw new Error("useAsset must be used within a AssetProvider");

  const { asset, setAsset } = context;

  return { asset, setAsset };
}
