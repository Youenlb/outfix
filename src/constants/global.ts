// pages.ts
export const Pages = {
  CLOTHES: "clothes",
  WISHLIST: "wishlist",
  OUTFITS: "outfits",
} as const;

export type PageName = (typeof Pages)[keyof typeof Pages];
