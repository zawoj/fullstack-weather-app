import React, { useState } from "react";
import { View, TextInput, StyleSheet, useColorScheme } from "react-native";
import { useAppContext } from "../context/use-app-context";
import Colors from "../constants/Colors";
import { i18n } from "./LanguageSelector";
import { router } from "expo-router";

const LocationFilter = () => {
  const [text, setText] = useState("");
  const { setFilters, filters } = useAppContext();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            color:
              colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
          },
        ]}
        onChangeText={setText}
        value={text}
        placeholder={i18n.t("enter-name-location")}
        placeholderTextColor={
          colorScheme === "dark" ? Colors.dark.text : Colors.light.text
        }
        returnKeyType='search'
        onSubmitEditing={() => {
          setFilters({
            ...filters,
            location: text,
            lat: undefined,
            lon: undefined,
          });
          router.push("/");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
  },
});

export default LocationFilter;
