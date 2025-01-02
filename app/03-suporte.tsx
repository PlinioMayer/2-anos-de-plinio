import React from "react";
import Terminal from "@/components/terminal";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useUpdateSave } from "@/contexts/save.context";

const styles = StyleSheet.create({
  touchable: {
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
  router.replace("/04-recompensa");
};

const Suporte = () => {
  useUpdateSave("03-suporte");

  return (
    <>
      <Terminal
        text={
          "A qualquer momento,\nvocê pode utilizar o botão de suporte\npara obter ajuda do time especializado."
        }
        onPress={handlePress}
      />
      <Image
        style={styles.image}
        source={require("@/assets/images/arrow.png")}
        contentFit="contain"
      />
    </>
  );
};

export default Suporte;
