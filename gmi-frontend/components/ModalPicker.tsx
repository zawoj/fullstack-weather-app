import { router } from "expo-router";
import React from "react";
import { View, Button } from "react-native";
import Colors from "../constants/Colors";
import { i18n } from "./LanguageSelector";
import { useAppContext } from "../context/use-app-context";

const ModalPicker = () => {
  const { filters } = useAppContext();
  const openMapModal = () => {
    router.push("/map");
  };

  const openFiltersModal = () => {
    router.push("/filters");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        padding: 30,
      }}
    >
      <Button
        title={i18n.t("search-by-name")}
        onPress={openFiltersModal}
        color={Colors.dark.secondaryColor}
      />
      <Button
        title={i18n.t("pick-from-map")}
        onPress={openMapModal}
        color={Colors.dark.secondaryColor}
      />
    </View>
  );
};

export default ModalPicker;
