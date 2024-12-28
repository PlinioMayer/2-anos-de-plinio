import Terminal from "@/components/terminal";
import { StyleSheet, TouchableHighlight } from "react-native";
import { useSave } from "@/hooks/save";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

const handlePress = () => {};

const Suporte = () => {
  useSave("recompensa");

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
