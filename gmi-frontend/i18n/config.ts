import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import en from "./en.json";
import pl from "./pl.json";
import de from "./de.json";

const translations = {
  en,
  pl,
  de,
};

const i18n = new I18n(translations);

// Set initial locale
i18n.locale = getLocales()[0].languageCode;

export default i18n;
