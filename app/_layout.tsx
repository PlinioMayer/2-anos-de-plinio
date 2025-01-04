import SupportButton from "@/components/suport-button";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { preventAutoHideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { SaveProvider, useSave } from "@/contexts/save.context";
import { getOrder, ScreenName, Screens } from "@/constants/screens";
import { Colors } from "@/constants/colors";
import "react-native-reanimated";
import { isBeforeBirthday } from "@/utils/birthday.utils";

preventAutoHideAsync();

const RootLayout = () => {
  const { save } = useSave();
  const tooSoon = isBeforeBirthday();

  return (
    <ThemeProvider value={DarkTheme}>
      <SupportButton>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{
              headerShown: false,
              swipeEdgeWidth: 150,
              drawerActiveBackgroundColor: Colors.tint,
              drawerActiveTintColor: "#FFF",
            }}
          >
            <Drawer.Screen
              name="index"
              options={{ drawerItemStyle: { display: "none" } }}
            />
            <Drawer.Screen
              name="muito-cedo"
              options={{
                drawerLabel: "Muito cedo",
                drawerItemStyle: { display: tooSoon ? "flex" : "none" },
              }}
            />
            {Object.entries(Screens).map(([name, options]) => (
              <Drawer.Screen
                name={name}
                key={name}
                options={{
                  ...options,
                  drawerItemStyle: {
                    display:
                      tooSoon ||
                      getOrder(save ?? "00-bem-vinda") <
                        getOrder(name as ScreenName)
                        ? "none"
                        : "flex",
                  },
                }}
              />
            ))}
          </Drawer>
        </GestureHandlerRootView>
      </SupportButton>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

const RootLayoutProvider = () => (
  <SaveProvider>
    <RootLayout />
  </SaveProvider>
);

export default RootLayoutProvider;
