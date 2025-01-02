import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { router } from "expo-router";

const handlePress = () => {
  router.replace("/06-nome");
};

const Comecar = () => {
  useUpdateSave("05-comecar");
  return (
    <Terminal text={"Sem mais delongas,\ncomecemos..."} onPress={handlePress} />
  );
};

export default Comecar;
