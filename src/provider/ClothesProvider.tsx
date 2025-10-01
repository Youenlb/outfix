// ClothesProvider.tsx
import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { ClothesContext } from "../context/ClothesContext";
import clothesData from "../data/clothes.json";
import type { Clothe } from "../types/Clothe";
import fs from "fs";

export const ClothesProvider = ({ children }: { children: ReactNode }) => {
  const [ clothes, setClothes] = useState<Clothe[]>(clothesData);

  const deleteClothe = (id: number) => {
    // TODO : Voir pour la gestion de la suppression du vêtement dans les outfits l'utilisant
    // Suppression du vêtement dans la liste des vêtements
    setClothes(prev => prev.filter(clothe => clothe.id !== id));
    
    // TODO : Suppression du vêtement dans le JSON
    // TODO : Faire quand j'aurai fait le back (avec express surment)
    
 
  };
  
  /*
  const addCloth = (cloth: Clothe) => {
    setClothes(prev => [...prev, cloth]);
  };*/

  /*
    const editCloth = (id: number, updated: Partial<Clothe>) => {
    setClothes(prev =>
      prev.map(c => (c.id === id ? { ...c, ...updated } : c))
    );
  };
  */
  // Mémoïsation de la valeur du contexte pour éviter les re-renders inutiles
  // car clothes est un objet
  const value = useMemo(() => ({ clothes, deleteClothe }), [clothes]);
  return (
    <ClothesContext.Provider value={value}>
      {children}
    </ClothesContext.Provider>
  );
};