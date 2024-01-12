import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { LanguageSelector, i18n } from "../components/LanguageSelector";
import { useAppContext } from "../context/use-app-context";

export default function ModalSettings() {
  const { filters } = useAppContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("language")}</Text>
      <LanguageSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
