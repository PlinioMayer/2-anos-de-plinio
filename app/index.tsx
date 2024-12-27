import Terminal from "@/components/terminal";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

const App = () => {
  return (
    <ThemedView style={styles.main}>
      <Terminal text="This screen doesn't exist." />
    </ThemedView>
  );
};

export default App;
