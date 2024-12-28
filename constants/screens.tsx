import Drawer from "expo-router/drawer";

export const Screens = {
  index: (
    <Drawer.Screen
      name="index"
      key={"index"}
      options={{ drawerLabel: "Bem-vinda" }}
    />
  ),
  suporte: (
    <Drawer.Screen
      name="suporte"
      key="suporte"
      options={{ drawerLabel: "Suporte" }}
    />
  ),
  recompensa: (
    <Drawer.Screen
      name="recompensa"
      key="recompensa"
      options={{ drawerLabel: "Recompensa" }}
    />
  ),
} as const;

export type ScreenName = keyof typeof Screens;
export const getOrder = (screen: ScreenName): number =>
  Object.keys(Screens).indexOf(screen);
