import { StyleSheet } from "react-native";
import { ThemedView, ThemedViewProps } from "./themed-view";

export type CenteredViewProps = ThemedViewProps;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const CenteredView = ({ children, ...rest }: CenteredViewProps) => (
  <ThemedView style={styles.main} {...rest}>
    {children}
  </ThemedView>
);

export default CenteredView;
