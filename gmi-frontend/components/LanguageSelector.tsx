import React, { useState } from "react";
import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import { Picker } from "@react-native-picker/picker";
import { View } from "./Themed";
import i18n from "../i18n/config";
import { useAppContext } from "../context/use-app-context";

// Komponent selektora języka
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.locale);
  const { setFilters, filters } = useAppContext();

  const onLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.locale = language;
    setFilters({
      ...filters,
      lang: language,
    });
  };

  return (
    <View
      style={{
        width: "50%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 10,
      }}
    >
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => onLanguageChange(itemValue)}
        testID='language-picker'
      >
        <Picker.Item label='English' value='en' />
        <Picker.Item label='Polish' value='pl' />
        <Picker.Item label='German' value='de' />
      </Picker>
    </View>
  );
};

export { LanguageSelector, i18n };
