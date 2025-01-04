export const Screens = {
  "00-bem-vinda": { drawerLabel: "Bem-vinda" },
  "01-agradecimento": { drawerLabel: "Agradecimento" },
  "02-modo-aviao": { drawerLabel: "Modo Avião" },
  "03-suporte": { drawerLabel: "Suporte" },
  "04-motivacao": { drawerLabel: "Recompensa" },
  "05-comecar": { drawerLabel: "Começo" },
  "06-nome": { drawerLabel: "Seu nome" },
  "07-primeiro-filme": { drawerLabel: "Primeiro filme" },
  "08-pergunta-fundamental": { drawerLabel: "Pergunta fundamental" },
  "09-into-the-wild": { drawerLabel: "Into the Wild" },
  "10-horario-filme": { drawerLabel: "Horário do filme" },
  "11-mesmo-aniversario": { drawerLabel: "Mesmo aniversário" },
  "12-onde-nos-conhecemos": { drawerLabel: "Onde nos conhecemos" },
  "13-recompensa": { drawerLabel: "Recompensa" },
  "muito-cedo": { drawerLabel: "Muito cedo" },
} as const;

export type ScreenName = keyof typeof Screens;
export const getOrder = (screen: ScreenName): number =>
  Object.keys(Screens).indexOf(screen);
