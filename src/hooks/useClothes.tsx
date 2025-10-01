// hooks/useClothes.ts
import { useContext } from "react";
import { ClothesContext } from "../context/ClothesContext";

export const useClothes = () => {
  const context = useContext(ClothesContext);
  if (!context) {
    throw new Error("useClothes doit être utilisé dans un ClothesProvider");
  }
  return context;
};
