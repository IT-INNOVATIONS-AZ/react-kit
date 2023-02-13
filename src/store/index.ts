import { create } from "zustand";

export const langStore = create((set) => ({
  lang: "az",
  changeToAz: () => set((state) => ({ lang: "az" })),
  changeToEn: () => set((state) => ({ lang: "en" })),
}));
