import { useState } from "react";
import "./App.css";
// COMPONENTS
import Header from "./components/Header";
// PAGES
import Clothes from "./pages/Clothes";
// TS
import type { PageName } from "./constants/global";
import { Pages, emptyClothe } from "./constants/global";
import type { Clothe } from "./types/Clothe";

function App() {
  // Contient l'enum de la page courante
  const [pageName, setPageName] = useState<PageName>(Pages.OUTFITS);
  const [consultedClothe, setConsultedClothe] = useState<Clothe | null>(null);
  console.log("La page actuelle est :", pageName);

  function handleAddClothe() {
    // MAJ valeur vêtement consulté
    setConsultedClothe({ ...emptyClothe, owned: true });

    // MAJ valeur de la page courante
    setPageName(Pages.createClothe);
  }
  return (
    <>
      <div>
        <Header pageName={pageName} onNavigate={setPageName} />
        {/* <OutfitManager /> */}
        {pageName === Pages.CLOTHES && (
          <Clothes onAddClothe={handleAddClothe} />
        )}
        {/*pageName === Pages.WISHLIST && <PageWishlist />*/}
        {/*pageName === Pages.OUTFITS && <PageOutfits />*/}
      </div>
    </>
  );
}

export default App;
