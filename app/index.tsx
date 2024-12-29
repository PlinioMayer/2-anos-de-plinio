import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/colors";
import { useSave } from "@/contexts/save.context";
import { useFonts } from "expo-font";
import { Redirect, router } from "expo-router";
import { hideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

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
          setSave("00-bem-vinda");
        case "00-bem-vinda":
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

  return <Redirect href="/00-bem-vinda" />;
};

export default App;
