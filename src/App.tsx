import { useState } from "react";
import "./App.css";
// COMPONENTS
import Header from "./components/Header";
// PAGES
import Clothes from "./pages/Clothes";
// TS
import type { PageName } from "./constants/global";
import { Pages } from "./constants/global";
function App() {
  const [pageName, setPageName] = useState<PageName>(Pages.OUTFITS); // état global de navigation
  console.log("La page actuelle est :", pageName);
  return (
    <>
      <div>
        <Header pageName={pageName} onNavigate={setPageName} />
        {/* <OutfitManager /> */}
        {pageName === Pages.CLOTHES && <Clothes />}
        {/*pageName === Pages.WISHLIST && <PageWishlist />*/}
        {/*pageName === Pages.OUTFITS && <PageOutfits />*/}
      </div>
    </>
  );
}

export default App;
