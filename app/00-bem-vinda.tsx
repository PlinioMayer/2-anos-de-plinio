import Terminal from "@/components/terminal";
import { router } from "expo-router";

const handlePress = () => {
  router.replace("/01-agradecimento");
};

const BemVinda = () => {
  return (
    <Terminal
      text={
        "Olá, Liliana!\nBem-vinda ao seu presente.\nIremos começar com um tutorial.\nClique na tela para prosseguir."
      }
      onPress={handlePress}
    />
  );
};

export default BemVinda;
