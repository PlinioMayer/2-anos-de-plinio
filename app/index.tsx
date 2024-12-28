import Terminal from "@/components/terminal";
import { router } from "expo-router";
import { StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

const App = () => {
  return (
    <TouchableHighlight
      onPress={() => {
        router.replace("/suporte");
      }}
      style={styles.main}
    >
      <Terminal
        text={
          "Olá, Liliana!\nBem-vinda ao seu presente.\nIremos começar com um tutorial.\nClique na tela para prosseguir."
        }
      />
    </TouchableHighlight>
  );
};

export default App;
