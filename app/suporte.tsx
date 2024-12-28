import Terminal from "@/components/terminal";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet, Touchable, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { useSave } from "@/hooks/save";
import { router } from "expo-router";

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
  useSave("suporte");

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
