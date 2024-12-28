import Terminal from "@/components/terminal";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";

const styles = StyleSheet.create({
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

const Suporte = () => {
  return (
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
  );
};

export default Suporte;
