import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { useEffect } from "react";
import { useAppContext } from "../context/use-app-context";

export default function TabOneScreen() {
  const { getWeather, weather } = useAppContext();

  useEffect(() => {
    getWeather({
      lat: 51.5074,
      lon: 0.1278,
    });
  }, []);

  console.log(weather);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
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
