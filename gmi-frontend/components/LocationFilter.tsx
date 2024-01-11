import React, { useState } from "react";
import { View, TextInput, StyleSheet, useColorScheme } from "react-native";
import { useAppContext } from "../context/use-app-context";
import Colors from "../constants/Colors";

const LocationFilter = () => {
  const [text, setText] = useState("");
  const { setFilters } = useAppContext();
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
        placeholder='Wpisz nazwę lokalizację'
        placeholderTextColor={
          colorScheme === "dark" ? Colors.dark.text : Colors.light.text
        }
        returnKeyType='search'
        onSubmitEditing={() =>
          setFilters({
            location: text,
            lat: undefined,
            lon: undefined,
          })
        }
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
