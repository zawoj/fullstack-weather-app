import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { AppProvider } from "../context";
import React from "react";

import { i18n } from "../components/LanguageSelector";
import { useAppContext } from "../context/use-app-context";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { filters } = useAppContext();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppProvider>
        <Stack>
          <Stack.Screen
            name='index'
            options={{
              title: "GMI WEATHER APP",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => (
                <FontAwesome.Button
                  name='gear'
                  backgroundColor={
                    colorScheme === "dark"
                      ? Colors.dark.secondaryColor
                      : Colors.light.secondaryColor
                  }
                  size={24}
                  style={{
                    paddingLeft: 18,
                  }}
                  onPress={() => {
                    router.push("/settings");
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name='map'
            options={{
              presentation: "modal",

              title: i18n.t("map"),
            }}
          />
          <Stack.Screen
            name='filters'
            options={{
              presentation: "modal",

              title: i18n.t("filters"),
            }}
          />
          <Stack.Screen
            name='settings'
            options={{
              presentation: "modal",

              title: i18n.t("settings"),
            }}
          />
        </Stack>
      </AppProvider>
    </ThemeProvider>
  );
}
