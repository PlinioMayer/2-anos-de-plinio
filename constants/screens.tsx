export const Screens = {
  index: { drawerLabel: "Bem-vinda" },
  suporte: { drawerLabel: "Suporte" },
  recompensa: { drawerLabel: "Recompensa" },
} as const;

export type ScreenName = keyof typeof Screens;
export const getOrder = (screen: ScreenName): number =>
  Object.keys(Screens).indexOf(screen);
