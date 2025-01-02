import { ScreenName } from "@/constants/screens";
import { router } from "expo-router";
import { Alert } from "react-native";

export const sucesso = (screen: ScreenName, message?: string) => {
  Alert.alert("Muito bem!", message, [
    {
      text: "Próximo",
      onPress: () => {
        router.replace(`/${screen}`);
      },
    },
  ]);
};

export const erro = (message?: string) => {
  Alert.alert("Oops, nananinanão...", message, [{ text: "Ok :(" }]);
};
