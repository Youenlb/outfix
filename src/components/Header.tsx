import { Eye, Menu, Shirt, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

// TS
import type { PageName } from "../constants/global";
import { Pages } from "../constants/global";

type HeaderProps = {
  pageName: PageName;
  onNavigate: (pageName: PageName) => void;
};

const Header = ({ pageName, onNavigate }: HeaderProps) => {
  // VARIABLES
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO: const [editingItem, setEditingItem] = useState(null);
  // Navigation
  const navigateTo = (pageName: PageName) => {
    onNavigate(pageName);
    setIsMenuOpen(false);
    // TODO: setEditingItem(null);
  };
  return (
    <>
      {/* Menu burger */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-3">
            {/* ITEM CLOTHES */}
            <button
              onClick={() => navigateTo(Pages.CLOTHES)}
              className={`w-full text-left p-4 rounded-lg transition-colors flex items-center gap-3 ${
                pageName === "clothes"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <Shirt size={20} />
              Mes Vêtements
            </button>
            {/* ITEM WISHLIST */}
            <button
              onClick={() => navigateTo(Pages.WISHLIST)}
              className={`w-full text-left p-4 rounded-lg transition-colors flex items-center gap-3 ${
                pageName === "wishlist"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <ShoppingCart size={20} />
              Wishlist
            </button>
            {/* ITEM OUTFITS */}
            <button
              onClick={() => navigateTo(Pages.OUTFITS)}
              className={`w-full text-left p-4 rounded-lg transition-colors flex items-center gap-3 ${
                pageName === "outfits"
                  ? "bg-green-100 text-green-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <Eye size={20} />
              Mes Outfits
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="px-6 py-4 flex justify-start items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
