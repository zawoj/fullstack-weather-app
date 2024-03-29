import { StyleSheet } from "react-native";
import React from "react";

import { Text, View } from "../components/Themed";
import { useEffect } from "react";
import { useAppContext } from "../context/use-app-context";
import { UnitsEnum } from "../types/weather";
import WeatherIcon from "../components/WeatherIcon";
import WeatherDetails from "../components/WeatherInformation";
import ModalPicker from "../components/ModalPicker";
import { i18n } from "../components/LanguageSelector";
import ErrorMessage from "../components/ErrorMessage";

export default function TabOneScreen() {
  const { getWeather, weather, filters, error } = useAppContext();

  useEffect(() => {
    getWeather(filters);
  }, [filters]);

  if (!weather || !filters) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t("loading")}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ModalPicker />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          <Text style={styles.title}>
            {i18n.t("weather-for")} {weather.name}
          </Text>
          <WeatherIcon iconId={weather.weather[0].icon} />
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
          <WeatherDetails
            temp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            pressure={weather.main.pressure}
            humidity={weather.main.humidity}
            weatherMain={weather.weather[0].main}
            weatherDescription={weather.weather[0].description}
            windSpeed={weather.wind.speed}
            windDirection={weather.wind.deg}
            sunrise={weather.sys.sunrise}
            sunset={weather.sys.sunset}
            units={filters.units as UnitsEnum}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
