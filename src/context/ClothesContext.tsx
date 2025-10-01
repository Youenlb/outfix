import { createContext } from "react";
import type { Clothe } from "../types/Clothe";

// Définition du type du contexte
interface ClothesContextType {
  // la liste de tous les vêtements
  clothes: Clothe[];
  deleteClothe: (id: number) => void;
}

// Création du contexte
export const ClothesContext = createContext<ClothesContextType | undefined>(undefined);