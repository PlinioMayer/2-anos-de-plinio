import SupportButton from "@/components/suport-button";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { preventAutoHideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    FixedSys: require("../assets/fonts/FixedSys.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <SupportButton>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="suporte" />
          <Stack.Screen name="recompensa" />
        </Stack>
      </SupportButton>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
