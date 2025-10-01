import { createContext } from "react";
import type { Clothe } from "../types/Clothe";

// Définition du type du contexte
interface ClothesContextType {
  // la liste de tous les vêtements
  clothes: Clothe[];
  // removeCloth: (id: number) => void; TODO : voir si removeCloth à mettre ici pour moi oui niveau lisibilité c'est pas mal je trouve et si jamais une autre page peut faire la suppression ainsi la fonction a bien sa place ici
}

// Création du contexte
export const ClothesContext = createContext<ClothesContextType | undefined>(undefined);