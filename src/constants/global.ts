// pages.ts
export const Pages = {
  CLOTHES: "clothes",
  WISHLIST: "wishlist",
  OUTFITS: "outfits",
} as const;

export type PageName = (typeof Pages)[keyof typeof Pages];

// TODO : Mettre constantes pour types de vêtements

// TODO : Mettre constante squellette d'un item non défini
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
