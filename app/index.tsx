import CenteredView from "@/components/centered-view";
import { Colors } from "@/constants/colors";
import { useSave } from "@/contexts/save.context";
import { isBeforeBirthday } from "@/utils/birthday.utils";
import { useFonts } from "expo-font";
import { Redirect, router } from "expo-router";
import { hideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

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
      if (!save) {
        setSave("00-bem-vinda");
      }

      hideAsync();
    }
  }, [save, setSave, loaded]);

  if (!loaded || !save) {
    return (
      <CenteredView>
        <ActivityIndicator size="large" color={Colors.tint} />
      </CenteredView>
    );
  }

  if (isBeforeBirthday()) {
    return <Redirect href="/muito-cedo" />;
  }

  return <Redirect href={`/${save}`} />;
};

export default App;
