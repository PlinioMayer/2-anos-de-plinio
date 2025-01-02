export const Screens = {
  "00-bem-vinda": { drawerLabel: "Bem-vinda" },
  "01-agradecimento": { drawerLabel: "Agradecimento" },
  "02-modo-aviao": { drawerLabel: "Modo Avião" },
  "03-suporte": { drawerLabel: "Suporte" },
  "04-recompensa": { drawerLabel: "Recompensa" },
  "05-comecar": { drawerLabel: "Começo" },
  "06-nome": { drawerLabel: "Seu nome" },
  "07-primeiro-filme": { drawerLabel: "Primeiro filme" },
} as const;

export type ScreenName = keyof typeof Screens;
export const getOrder = (screen: ScreenName): number =>
  Object.keys(Screens).indexOf(screen);
