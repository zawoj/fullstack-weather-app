import { router } from "expo-router";
import React from "react";
import { View, Button } from "react-native";
import Colors from "../constants/Colors";

const ModalPicker = () => {
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
        title='Search by name'
        onPress={openFiltersModal}
        color={Colors.dark.secondaryColor}
      />
      <Button
        title='Pick from Map'
        onPress={openMapModal}
        color={Colors.dark.secondaryColor}
      />
    </View>
  );
};

export default ModalPicker;
