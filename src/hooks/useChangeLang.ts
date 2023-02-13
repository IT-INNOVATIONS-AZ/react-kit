import { langStore } from "../store";

export const useChangeLang = () => {
  const changeToAz = langStore((state) => state.changeToAz);
  const changeToEn = langStore((state) => state.changeToEn);

  return { changeToEn, changeToAz };
};

export const useGetLang = () => {
  const lang = langStore((state) => state.lang);

  return { lang };
};
