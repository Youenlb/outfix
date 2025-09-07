// pages.ts

// nom de page
export const Pages = {
  CLOTHES: "clothes",
  WISHLIST: "wishlist",
  OUTFITS: "outfits",
  createClothe: "createClothe",
} as const;

export type PageName = (typeof Pages)[keyof typeof Pages];

// type de vêtement
export const ClotheType = {
  TOP: "Haut",
  BOTTOM: "Bas",
  SHOES: "Chaussures",
  JACKET: "Veste",
  ACCESSORY: "Accessoire",
  UNDERWEAR: "Sous-vêtement",
  OTHER: "Autre",
} as const;

export type ClotheTypeName = (typeof ClotheType)[keyof typeof ClotheType];

export type ClothingFilter = ClotheTypeName | "all";
export const emptyClothe = {
  id: undefined,
  name: "",
  // TODO : Mettre dans les constantes de type le type undefined
  type: "",
  images: [],
  link: "",
  owned: undefined,
  brand: "",
  color: "",
  size: "",
};
