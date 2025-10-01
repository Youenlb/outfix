// ClothesProvider.tsx
import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { ClothesContext } from "../context/ClothesContext";
import clothesData from "../data/clothes.json";
import type { Clothe } from "../types/Clothe";

export const ClothesProvider = ({ children }: { children: ReactNode }) => {
  const [ clothes ] = useState<Clothe[]>(clothesData);

  // Mémoïsation de la valeur du contexte pour éviter les re-renders inutiles
  // car clothes est un objet
  const value = useMemo(() => ({ clothes }), [clothes]);

  return (
    <ClothesContext.Provider value={value}>
      {children}
    </ClothesContext.Provider>
  );
};