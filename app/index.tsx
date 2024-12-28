import Terminal from "@/components/terminal";
import { useSave } from "@/contexts/save-context";
import { Href, router } from "expo-router";
import { hideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableHighlight, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

const handlePress = () => {
  router.replace("/suporte");
};

const App = () => {
  const { save, setSave } = useSave();

  useEffect(() => {
    if (save !== undefined) {
      switch (save) {
        case null:
          setSave("index");
          break;
        case "index":
          break;
        default:
          router.replace(`/${save}`);
          break;
      }

      hideAsync();
    }
  }, [save, setSave]);

  return (
    <TouchableHighlight onPress={handlePress} style={styles.main}>
      <Terminal
        text={
          "Olá, Liliana!\nBem-vinda ao seu presente.\nIremos começar com um tutorial.\nClique na tela para prosseguir."
        }
      />
    </TouchableHighlight>
  );
};

export default App;
