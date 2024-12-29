import CenteredTouchable from "@/components/centered-touchable";
import Terminal from "@/components/terminal";
import { router } from "expo-router";

const handlePress = () => {
  router.replace("/01-agradecimento");
};

const BemVinda = () => {
  return (
    <CenteredTouchable onPress={handlePress}>
      <Terminal
        text={
          "Olá, Liliana!\nBem-vinda ao seu presente.\nIremos começar com um tutorial.\nClique na tela para prosseguir."
        }
      />
    </CenteredTouchable>
  );
};

export default BemVinda;
