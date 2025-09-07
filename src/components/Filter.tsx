// TS
import type { ClotheTypeName, ClothingFilter } from "../constants/global";

type FilterProps = {
  selectedType: ClothingFilter;
  onChange: (clotheTypeName: ClotheTypeName) => void;
};

const Filter = ({ selectedType, onChange }: FilterProps) => {
  // VARIABLES
  // TODO : pas réutilisable frindly, l'appel à l'intérieur doit seulement être une prop reçu par le filter qui peut être ClothingTypeFilter ou un autre
  const filterOptions: ClothingFilter[] = [
    "all",
    ...Object.values(ClotheTypeName),
  ];
  return (
    <>
      <div className="mb-6">
        <select
          value={selectedType}
          onChange={(e) => onChange(e.target.value as ClotheTypeName)}
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Tous les types</option>
          {filterOptions.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default Filter;
