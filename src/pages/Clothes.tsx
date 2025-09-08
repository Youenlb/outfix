import { Plus } from "lucide-react";
import clothesData from "../data/clothes.json";
import type { Clothe } from "../types/Clothe";
import { useState } from "react";
// COMPONENTS
import ClotheCard from "../components/clothes/ClotheCard";
import Filter from "../components/Filter";
import type { ClothingFilter } from "../constants/global";
// TODO : Faire un composant filtre vêtement qui utilise Filter (il faudra modif le composant Filter) car le filtre sera pareil entre la page clothe et wishlist
type ClothesProps = {
  onAddClothe: () => void;
  onEditClick: (clothe: Clothe) => void;
  onDeleteClick: (clothe: Clothe) => void;
};

// Récupérer la liste des vêtements contenus dans le fichier JSON clothes
const Clothes = ({ onAddClothe, onEditClick, onDeleteClick }: ClothesProps) => {
  // TODO : Voir pour la gestion de selectedType comment faire
  const [selectedType, setSelectedType] = useState<ClothingFilter>("all");
  const clothes: Clothe[] = clothesData;

  const getFilteredClothes = () => {
    let filtered = clothes;

    // Filtrer par rapport au type
    if (selectedType !== "all") {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    return filtered;
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mes Vêtements</h1>
        {/* Bouton Ajouter un vêtement */}
        <button
          onClick={() => {
            onAddClothe();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={16} />
          Ajouter
        </button>
      </div>

      {/*Bouton de filtrage sur le type de vêtement */}
      <Filter selectedType={selectedType} onChange={setSelectedType} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/*Création des cartes de vêtements dans la page qui match avec les filtres*/}
        {getFilteredClothes().map((item) => (
          <ClotheCard key={item.id} clothe={item} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
        ))}
      </div>
    </>
  );
};

export default Clothes;
