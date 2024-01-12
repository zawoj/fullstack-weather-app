import React from "react";
import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import { i18n } from "./LanguageSelector";

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <View>
      <Text style={styles.title}>{i18n.t("error")}</Text>
      <Text style={styles.title}>{JSON.parse(error).message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ErrorMessage;
