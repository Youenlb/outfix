import { Plus } from "lucide-react";
import { emptyClothe } from "../constants/global";
import clothesData from "../data/clothes.json";
import type { Clothe } from "../types/Clothe";

/*
type ClothesProps = {
  pageName: PageName;
  onNavigate: (pageName: PageName) => void;
};
*/
// Récupérer la liste des vêtements contenus dans le fichier JSON clothes
const Clothes = () => {
  const clothes: Clothe[] = clothesData;
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Mes Vêtements</h1>
          <button
            onClick={() => {
              // TODO : A la place de l'appel mettre le set de la var correspondante dans App (passer en paramètre + créer la var dans app (prendre var newItems du composant OutfitManager))
              setNewItem({ ...emptyClothe, owned: true });
              // TODO : A la place de l'appel à setCurrentPage faire appel au set de la var de page présent dans App (il faudra que je le fasse passer dans les props de Clothes)
              //setCurrentPage("add");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={16} />
            Ajouter
          </button>
        </div>

        <div className="mb-6">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Tous les types</option>
            {clothingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

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
