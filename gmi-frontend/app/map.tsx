import React, { useState } from "react";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { Button, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { useAppContext } from "../context/use-app-context";
import { router } from "expo-router";
import i18n from "../i18n/config";

export default function ModalMap() {
  const [selectedCoordinate, setSelectedCoordinate] = useState<null | {
    latitude: number;
    longitude: number;
  }>(null);
  const { setFilters, filters } = useAppContext();

  const handleMapPress = (e: MapPressEvent) => {
    setSelectedCoordinate(e.nativeEvent.coordinate);
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        zoomTapEnabled={false}
        zoomEnabled={true}
        onPress={handleMapPress}
      >
        {selectedCoordinate && (
          <Marker coordinate={selectedCoordinate} title={"Selected Location"} />
        )}
      </MapView>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Button
          title={`${i18n.t("continue")}`}
          color={Colors.dark.secondaryColor}
          disabled={!selectedCoordinate}
          onPress={() => {
            if (selectedCoordinate)
              setFilters({
                ...filters,
                location: undefined,
                lat: selectedCoordinate.latitude,
                lon: selectedCoordinate.longitude,
              });
            router.push("/");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
