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
