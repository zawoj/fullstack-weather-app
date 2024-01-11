import { useColorScheme } from "react-native";
import { Text, TextProps } from "./Themed";
import Colors from "../constants/Colors";

export function ThemedText(props: TextProps) {
  const colorScheme = useColorScheme();

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "SpaceMono",
          color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
        },
        props.style,
      ]}
    />
  );
}
