import { View, StyleSheet } from "react-native";
import LocationFilter from "../components/LocationFilter";

export default function ModalFilters() {
  return (
    <View style={styles.container}>
      <LocationFilter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
