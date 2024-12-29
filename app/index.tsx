import Terminal from "@/components/terminal";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/colors";
import { useSave } from "@/contexts/save-context";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { hideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

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
  const [loaded] = useFonts({
    FixedSys: require("../assets/fonts/FixedSys.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }

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
  }, [save, setSave, loaded]);

  if (!loaded) {
    return (
      <ThemedView style={styles.main}>
        <ActivityIndicator size="large" color={Colors.tint} />
      </ThemedView>
    );
  }

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
