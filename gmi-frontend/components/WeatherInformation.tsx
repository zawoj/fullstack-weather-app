import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { getUnitString } from "../utils/getUnit";
import { UnitsEnum } from "../types/weather";
import Colors from "../constants/Colors";
import { ThemedText } from "./StyledText";

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
  return (
    <View>
      <WeatherDetail
        label='Temperatura'
        value={`${temp} ${getUnitString(units ?? UnitsEnum.METRIC)}`}
      />
      <WeatherDetail
        label='Odczuwalna'
        value={`${feelsLike} ${getUnitString(units ?? UnitsEnum.METRIC)}`}
      />
      <WeatherDetail label='Ciśnienie' value={`${pressure} hPa`} />
      <WeatherDetail label='Wilgotność' value={`${humidity}%`} />
      <WeatherDetail
        label='Warunki'
        value={`${weatherMain}, ${weatherDescription}`}
      />
      <WeatherDetail
        label='Wiatr'
        value={`${windSpeed} m/s, kierunek: ${windDirection}°`}
      />
      <WeatherDetail
        label='Wschód słońca'
        value={new Date(sunrise * 1000).toLocaleTimeString()}
      />
      <WeatherDetail
        label='Zachód słońca'
        value={new Date(sunset * 1000).toLocaleTimeString()}
      />
    </View>
  );
};

const WeatherDetail = ({ label, value }: { label: string; value: string }) => (
  <ThemedText style={styles.detail}>
    <ThemedText style={styles.label}>{label}:</ThemedText> {value}
  </ThemedText>
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
