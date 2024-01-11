import React from "react";
import { Image, StyleSheet } from "react-native";

type WeatherIconProps = {
  iconId: string;
};

const WeatherIcon = ({ iconId }: WeatherIconProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  return <Image source={{ uri: iconUrl }} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 150,
    height: 150,
  },
});

export default WeatherIcon;
