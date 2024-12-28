import Terminal from "@/components/terminal";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { getOrder } from "@/constants/screens";
import { useSave } from "@/contexts/save-context";

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    flex: 1,
    width: 65,
    height: 65,
    position: "absolute",
    bottom: 0,
    right: 70,
  },
});

const handlePress = () => {
  router.replace("/recompensa");
};

const Suporte = () => {
  const { save, setSave } = useSave();

  useEffect(() => {
    if (save && getOrder(save) < getOrder("suporte")) {
      setSave("suporte");
    }
  }, [save, setSave]);

  return (
    <TouchableHighlight style={styles.touchable} onPress={handlePress}>
      <ThemedView style={styles.main}>
        <Terminal
          text={
            "A qualquer momento,\nvocê pode utilizar o botão de suporte\npara obter ajuda do time especializado."
          }
        />
        <Image
          style={styles.image}
          source={require("@/assets/images/arrow.png")}
          contentFit="contain"
        />
      </ThemedView>
    </TouchableHighlight>
  );
};

export default Suporte;
