import { Colors } from "@/constants/colors";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = Colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
