import { Plus, Save, X } from "lucide-react";
import { useState } from "react";

// Types de vêtements disponibles
// TODO : Ajoute dans le fichier de constante global.ts en tant qu'enum
const clothingTypes = [
  "Haut",
  "Bas",
  "Chaussures",
  "Veste",
  "Accessoire",
  "Sous-vêtement",
  "Autre",
];

const OutfitManager = () => {
  const [currentPage, setCurrentPage] = useState("clothes");
  const [clothes, setClothes] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({
    name: "",
    type: "Haut",
    images: [],
    link: "",
    owned: true,
    brand: "",
    color: "",
    size: "",
  });

  // Navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
    setEditingItem(null);
  };

  // Filtrage des vêtements
  // TODO : Faire en sorte que cette fonction soit un comportement propre à close il y a un truc ou le mettre mais je ne sais plus quoi
  // Voir dans les projets précédents
  const getFilteredClothes = (ownedFilter = null) => {
    let filtered = clothes;

    if (ownedFilter !== null) {
      filtered = filtered.filter((item) => item.owned === ownedFilter);
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    return filtered;
  };

  // Gestion des items
  const handleAddItem = () => {
    const id = Date.now();
    setClothes([...clothes, { ...newItem, id }]);
    setNewItem({
      name: "",
      type: "Haut",
      images: [],
      link: "",
      owned: currentPage === "clothes",
      brand: "",
      color: "",
      size: "",
    });
    navigateTo(currentPage === "add-from-wishlist" ? "wishlist" : "clothes");
  };

  const handleEditItem = () => {
    setClothes(
      clothes.map((item) => (item.id === editingItem.id ? editingItem : item))
    );
    setEditingItem(null);
    navigateTo("clothes");
  };

  const handleDeleteItem = () => {
    setClothes(clothes.filter((item) => item.id !== itemToDelete.id));
    setOutfits(
      outfits.map((outfit) => ({
        ...outfit,
        items: outfit.items.filter((id) => id !== itemToDelete.id),
      }))
    );
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const confirmDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  // Gestion des outfits
  const handleCreateOutfit = () => {
    const newOutfit = {
      id: Date.now(),
      name: `Outfit ${outfits.length + 1}`,
      items: [],
      createdAt: new Date().toLocaleDateString(),
    };
    setOutfits([...outfits, newOutfit]);
    setCurrentPage("outfit-creator");
    setEditingItem(newOutfit);
  };

  const handleSaveOutfit = () => {
    setOutfits(
      outfits.map((outfit) =>
        outfit.id === editingItem.id ? editingItem : outfit
      )
    );
    setEditingItem(null);
    setCurrentPage("outfits");
  };

  const addItemToOutfit = (itemId) => {
    if (editingItem && !editingItem.items.includes(itemId)) {
      setEditingItem({
        ...editingItem,
        items: [...editingItem.items, itemId],
      });
    }
  };

  const removeItemFromOutfit = (itemId) => {
    if (editingItem) {
      setEditingItem({
        ...editingItem,
        items: editingItem.items.filter((id) => id !== itemId),
      });
    }
  };

  const ItemForm = ({ item, setItem, onSubmit, title }) => (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <input
            type="text"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nom du vêtement"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={item.type}
            onChange={(e) => setItem({ ...item, type: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {clothingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Marque
          </label>
          <input
            type="text"
            value={item.brand}
            onChange={(e) => setItem({ ...item, brand: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Marque"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Couleur
            </label>
            <input
              type="text"
              value={item.color}
              onChange={(e) => setItem({ ...item, color: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Couleur"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Taille
            </label>
            <input
              type="text"
              value={item.size}
              onChange={(e) => setItem({ ...item, size: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Taille"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lien de référence
          </label>
          <input
            type="url"
            value={item.link}
            onChange={(e) => setItem({ ...item, link: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            URL de l'image
          </label>
          <input
            type="url"
            value={item.images[0] || ""}
            onChange={(e) => setItem({ ...item, images: [e.target.value] })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="URL de l'image"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="owned"
            checked={item.owned}
            onChange={(e) => setItem({ ...item, owned: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="owned" className="text-sm font-medium text-gray-700">
            Je possède cet article
          </label>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={onSubmit}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Save size={16} />
          Enregistrer
        </button>
        <button
          onClick={() => navigateTo("clothes")}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>
  );

  // Pages
  const renderPage = () => {
    switch (currentPage) {
      case "wishlist":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Ma Wishlist</h1>
              <button
                onClick={() => {
                  setNewItem({ ...newItem, owned: false });
                  setCurrentPage("add-from-wishlist");
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={16} />
                Ajouter à la wishlist
              </button>
            </div>

            <div className="mb-6">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
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
              {getFilteredClothes(false).map((item) => (
                <ClothingCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        );

      case "add":
      case "add-from-wishlist":
        return (
          <ItemForm
            item={newItem}
            setItem={setNewItem}
            onSubmit={handleAddItem}
            title="Ajouter un vêtement"
          />
        );

      case "edit":
        return (
          <ItemForm
            item={editingItem}
            setItem={setEditingItem}
            onSubmit={handleEditItem}
            title="Modifier le vêtement"
          />
        );

      case "outfits":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Mes Outfits</h1>
              <button
                onClick={handleCreateOutfit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={16} />
                Créer un outfit
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outfits.map((outfit) => (
                <div
                  key={outfit.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{outfit.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Créé le {outfit.createdAt}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {outfit.items.slice(0, 4).map((itemId) => {
                      const item = clothes.find((c) => c.id === itemId);
                      return item ? (
                        <div
                          key={itemId}
                          className="aspect-square rounded overflow-hidden"
                        >
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : null;
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setEditingItem(outfit);
                      setCurrentPage("outfit-creator");
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Modifier
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "outfit-creator":
        if (!editingItem) return null;

        const outfitItems = editingItem.items
          .map((id) => clothes.find((c) => c.id === id))
          .filter(Boolean);

        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Créateur d'Outfit
              </h1>
              <button
                onClick={handleSaveOutfit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Save size={16} />
                Sauvegarder
              </button>
            </div>

            <div className="mb-6">
              <input
                type="text"
                value={editingItem.name}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, name: e.target.value })
                }
                className="text-xl font-semibold p-2 border border-gray-300 rounded-lg"
                placeholder="Nom de l'outfit"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Outfit actuel</h2>
                <div className="bg-gray-50 p-6 rounded-lg min-h-96">
                  {outfitItems.length === 0 ? (
                    <p className="text-gray-500 text-center">
                      Aucun vêtement sélectionné
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {outfitItems.map((item) => (
                        <div key={item.id} className="relative">
                          <ClothingCard item={item} showActions={false} />
                          {!item.owned && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                              Non possédé
                            </div>
                          )}
                          <button
                            onClick={() => removeItemFromOutfit(item.id)}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Ajouter des vêtements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {clothes.map((item) => (
                    <div key={item.id} className="relative">
                      <ClothingCard item={item} showActions={false} />
                      <button
                        onClick={() => addItemToOutfit(item.id)}
                        className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <Plus className="text-white" size={24} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main content */}
      <main className="p-6">{renderPage()}</main>

      {/* Modal de suppression */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              Confirmer la suppression
            </h3>
            <p className="text-gray-600 mb-6">
              Êtes-vous sûr de vouloir supprimer "{itemToDelete?.name}" ? Cette
              action est irréversible.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDeleteItem}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Supprimer
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutfitManager;
