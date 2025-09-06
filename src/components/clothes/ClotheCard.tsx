import { useState } from "react";
/*
type ClothesProps = {
  pageName: PageName;
  onNavigate: (pageName: PageName) => void;
};
*/
const ClotheCard = ({ item, showActions = true }) => {
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
            item.images[0] ||
            "https://via.placeholder.com/300x400/gray/white?text=No+Image"
          }
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {!item.owned && (
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
          Wishlist
        </div>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
        <p className="text-sm text-gray-600">
          {item.type} - {item.brand}
        </p>
        <p className="text-xs text-gray-500">
          {item.color} • {item.size}
        </p>
      </div>

      {showActions && isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              setEditingItem(item);
              setCurrentPage("edit");
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => confirmDelete(item)}
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
