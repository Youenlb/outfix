// TS
import type { ClothingFilter, ClotheTypeName } from "../constants/global";
import { ClotheType } from "../constants/global";
type FilterProps = {
  selectedType: ClothingFilter;
  onChange: (clotheTypeName: ClotheTypeName) => void;
};

const Filter = ({ selectedType, onChange }: FilterProps) => {
  // VARIABLES
  // TODO : pas réutilisable friendly, l'appel à l'intérieur doit seulement être une prop reçu par le filter qui peut être ClothingTypeFilter ou un autre
  const filterOptions: ClothingFilter[] = [
    "All",
    ...Object.values(ClotheType),
  ];
  return (
    <div className="m-3 mb-6 flex justify-start">
      <select
        value={selectedType}
        onChange={(e) => onChange(e.target.value as ClotheTypeName)}
        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        {filterOptions.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
