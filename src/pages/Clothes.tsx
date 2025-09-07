import { Plus } from "lucide-react";
import clothesData from "../data/clothes.json";
import type { Clothe } from "../types/Clothe";

// COMPONENTS
import Filter from "../components/Filter";
import type { ClothingFilter } from "../constants/global";

type ClothesProps = {
  onAddClothe: () => void;
};

// Récupérer la liste des vêtements contenus dans le fichier JSON clothes
const Clothes = ({ onAddClothe }: ClothesProps) => {
  // TODO : Voir pour la gestion de selectedType comment faire
  const [selectedType, setSelectedType] = useState<ClothingFilter>("all");
  const clothes: Clothe[] = clothesData;
  return (
    <>
      <div>
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

        <Filter selectedType={selectedType} onChange={setSelectedType} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getFilteredClothes(true).map((item) => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Clothes;
