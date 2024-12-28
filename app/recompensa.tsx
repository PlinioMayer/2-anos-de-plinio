import Terminal from "@/components/terminal";
import { getOrder } from "@/constants/screens";
import { useSave } from "@/contexts/save-context";
import { useEffect } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

const handlePress = () => {};

const Suporte = () => {
  const { save, setSave } = useSave();

  useEffect(() => {
    if (save && getOrder(save) < getOrder("recompensa")) {
      setSave("recompensa");
    }
  }, [save, setSave]);

  return (
    <TouchableHighlight style={styles.main} onPress={handlePress}>
      <Terminal
        text={
          "Eu farei algumas perguntas.\nSe você conseguir responder a todas.\nEu compartilharei com você\nmeu bem mais precioso.\nSerá que prestamos atenção\nnas mesmas coisas?"
        }
      />
    </TouchableHighlight>
  );
};

export default Suporte;
