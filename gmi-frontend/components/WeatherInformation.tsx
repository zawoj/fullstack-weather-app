import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { getUnitString } from "../utils/getUnit";
import { UnitsEnum } from "../types/weather";
import Colors from "../constants/Colors";
import { Text } from "./Themed";
import { i18n } from "./LanguageSelector";
import { useAppContext } from "../context/use-app-context";

type WeatherDetailsProps = {
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  weatherMain: string;
  weatherDescription: string;
  windSpeed: number;
  windDirection: number;
  sunrise: number;
  sunset: number;
  units: UnitsEnum;
};

const WeatherDetails = ({
  temp,
  feelsLike,
  pressure,
  humidity,
  weatherMain,
  weatherDescription,
  windSpeed,
  windDirection,
  sunrise,
  sunset,
  units,
}: WeatherDetailsProps) => {
  const { filters } = useAppContext();

  return (
    <View>
      <WeatherDetail
        label={i18n.t("temperature")}
        value={`${temp} ${getUnitString(units ?? UnitsEnum.METRIC)}`}
      />
      <WeatherDetail
        label={i18n.t("perceived")}
        value={`${feelsLike} ${getUnitString(units ?? UnitsEnum.METRIC)}`}
      />
      <WeatherDetail label={i18n.t("pressure")} value={`${pressure} hPa`} />
      <WeatherDetail label={i18n.t("humidity")} value={`${humidity}%`} />
      <WeatherDetail
        label={i18n.t("conditions")}
        value={`${weatherMain}, ${weatherDescription}`}
      />
      <WeatherDetail
        label={i18n.t("wind")}
        value={`${windSpeed} m/s, ${i18n.t("direction")}: ${windDirection}°`}
      />
      <WeatherDetail
        label={i18n.t("sunrise")}
        value={new Date(sunrise * 1000).toLocaleTimeString()}
      />
      <WeatherDetail
        label={i18n.t("sunset")}
        value={new Date(sunset * 1000).toLocaleTimeString()}
      />
    </View>
  );
};

const WeatherDetail = ({ label, value }: { label: string; value: string }) => (
  <Text style={styles.detail}>
    <Text style={styles.label}>{label}:</Text> {value}
  </Text>
);

const styles = StyleSheet.create({
  detail: {
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
    color: Colors.dark.secondaryColor,
    fontSize: 20,
  },
});

export default WeatherDetails;
