import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { erro, sucesso } from "@/utils/alert.utils";
import {
  Accuracy,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { parseDistance } from "@/utils/metric.utils";

const handlePress = async () => {
  const latitude = -15.83096784776469;
  const longitude = -47.915736798976766;
  const { status } = await requestForegroundPermissionsAsync();

  if (status !== "granted") {
    erro("Você precisa permitir o uso da localização");
    return;
  }

  const currentPosition = await getCurrentPositionAsync({
    accuracy: Accuracy.High,
  });

  const distancia =
    Math.acos(
      Math.sin(latitude) * Math.sin(currentPosition.coords.latitude) +
        Math.cos(latitude) *
          Math.cos(currentPosition.coords.latitude) *
          Math.cos(currentPosition.coords.longitude - longitude),
    ) * 63710;

  if (distancia < 50) {
    sucesso("13-recompensa");
    return;
  }

  erro(`Você está ${parseDistance(distancia)} distante de onde nos conhecemos`);
};

const OndeNosConhecemos = () => {
  useUpdateSave("12-onde-nos-conhecemos");

  return <Terminal text={"Onde nos conhecemos?"} onPress={handlePress} />;
};

export default OndeNosConhecemos;
