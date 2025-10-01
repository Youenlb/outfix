import { useState } from "react";
import "./App.css";
// COMPONENTS
import Header from "./components/Header";
import DeleteClotheModal from "./components/DeleteClotheModal";
// PAGES
import Clothes from "./pages/Clothes";
// TS
import type { PageName } from "./constants/global";
import { Pages, emptyClothe } from "./constants/global";
import type { Clothe } from "./types/Clothe";

// TODO : Me rappeler l'utilité des use et en faire pour clothe et outfit ? 
// Voir si pas une meilleur manière de faire  
function App() {
  // Contient l'enum de la page courante
  const [pageName, setPageName] = useState<PageName>(Pages.OUTFITS);
  const [createClothe, setCreateClothe] = useState<Clothe | null>(null);
  const [editClothe, setEditClothe] = useState<Clothe | null>(null);
  const [deleteClothe, setDeleteClothe] = useState<Clothe | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  console.log("La page actuelle est :", pageName);

  function handleAddClothe() {
    // MAJ valeur vêtement consulté
    setCreateClothe({ ...emptyClothe, owned: true });

    // MAJ valeur de la page courante
    setPageName(Pages.createClothe);
  }
  function handleEditClotheCardClick(clothe: Clothe){
    setEditClothe(clothe);
    setPageName(Pages.editClothe);
  }
  function handleDeleteClotheCardClick(clothe: Clothe){

    setDeleteClothe(clothe);
    setShowDeleteModal(true);
  }
  function handleDeleteButtonClickOfDeleteModal(){
    // TODO : Faire la suppression du vêtement dans le JSON correspondant
    // TODO : Faire la suppresion dans la prop
    //setClothes(clothes.filter((item) => item.id !== itemToDelete.id));

    // TODO : Voir pour la gestion de la suppression du vêtement dans les outfits l'utilisant
    // TODO : On peut penser à faire une pop up pour dire que le vêtement que l'on souhaite enlever est déjà présent dans des outfits et confirmer si on veut quand même supprimer
    // TODO : Voir après intégration des outfits pour la gestion de la suppression dans les outfits
    /*
    setOutfits(
      outfits.map((outfit) => ({
        ...outfit,
        items: outfit.items.filter((id) => id !== itemToDelete.id),
      }))
    );*/
    setShowDeleteModal(false);
    setDeleteClothe(null);
};
  return (
    <>
      <Header pageName={pageName} onNavigate={setPageName} />
      {/* <OutfitManager /> */}
      {pageName === Pages.CLOTHES && (
        <Clothes onAddClothe={handleAddClothe} onEditClick={handleEditClotheCardClick} onDeleteClick={handleDeleteClotheCardClick}/>
      )}
      {/*pageName === Pages.WISHLIST && <PageWishlist />*/}
      {/*pageName === Pages.OUTFITS && <PageOutfits />*/}
      {/*Fenêtre de suppression d'un vêtement*/}
      <DeleteClotheModal isOpen={showDeleteModal} clothe={deleteClothe} onDeleteClick={handleDeleteButtonClickOfDeleteModal} onCancelClick={()=>setShowDeleteModal(false)}/>
    </>
  );
}

export default App;
