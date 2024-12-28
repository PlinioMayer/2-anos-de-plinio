import SupportButton from "@/components/suport-button";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { preventAutoHideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { SaveProvider } from "@/contexts/save-context";
import { Screens } from "@/constants/screens";

preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    FixedSys: require("../assets/fonts/FixedSys.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SaveProvider>
      <ThemeProvider value={DarkTheme}>
        <SupportButton>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ headerShown: false }}>
              {Object.values(Screens)}
            </Drawer>
          </GestureHandlerRootView>
        </SupportButton>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SaveProvider>
  );
}
