import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import type { Clothe } from "../../types/Clothe";
type ClothesProps = {
  clothe: Clothe;
  onEditClick: (clothe: Clothe) => void;
  onDeleteClick: (clothe: Clothe) => void;
};

const ClotheCard = ({ clothe, onEditClick, onDeleteClick }: ClothesProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={
            clothe.images[0] ||
            "https://via.placeholder.com/300x400/gray/white?text=No+Image"
          }
          alt={clothe.name}
          className="w-full h-full object-cover"
        />
      </div>

      {!clothe.owned && (
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
          Wishlist
        </div>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 truncate">{clothe.name}</h3>
        <p className="text-sm text-gray-600">
          {clothe.type} - {clothe.brand}
        </p>
        <p className="text-xs text-gray-500">
          {clothe.color} • {clothe.size}
        </p>
      </div>
      {/*TODO : voir pourquoi le showAction est mis aussi (je vais peut-être le comprendre plus tard)*/}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              onEditClick(clothe);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDeleteClick(clothe)}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ClotheCard;
