import { ReactNode } from "react";
import { ThemedView } from "./themed-view";
import { Linking, StyleSheet, TouchableHighlight } from "react-native";
import { ThemedText } from "./themed-text";

export type SupportButtonProps = {
  children: ReactNode;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#424242",
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    right: 50,
    borderRadius: "100%",
  },
});

const openSupport = () => {
  Linking.openURL(
    "https://wa.me/5561983758763?text=Mim%20ajuda%20,%20pufav%C3%B4",
  );
};

const SupportButton = ({ children }: SupportButtonProps) => {
  return (
    <ThemedView style={styles.main}>
      {children}
      <TouchableHighlight onPress={openSupport} style={styles.button}>
        <ThemedText type="subtitle">?</ThemedText>
      </TouchableHighlight>
    </ThemedView>
  );
};

export default SupportButton;
