import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import az from "./az";
import { useGetLang } from "../hooks/useChangeLang";

export const useLangInit = () => {
  const { lang: lng } = useGetLang();
  return i18n.use(initReactI18next).init({
    resources: {
      en,
      az,
    },
    lng,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
};
