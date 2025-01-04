import CenteredView from "@/components/centered-view";
import { Colors } from "@/constants/colors";
import { useSave } from "@/contexts/save.context";
import { useFonts } from "expo-font";
import { Redirect, router } from "expo-router";
import { hideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const App = () => {
  const date = new Date();
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
      <CenteredView>
        <ActivityIndicator size="large" color={Colors.tint} />
      </CenteredView>
    );
  }

  if (
    date.getFullYear() < 2025 ||
    (date.getFullYear() === 2025 && date.getMonth() === 0 && date.getDate() < 6)
  ) {
    return <Redirect href="/muito-cedo" />;
  }

  return <Redirect href="/00-bem-vinda" />;
};

export default App;
