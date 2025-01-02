import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { router } from "expo-router";

const handlePress = () => {
  router.replace("/05-comecar");
};

const Suporte = () => {
  useUpdateSave("04-recompensa");

  return (
    <Terminal
      text={
        "Se você conseguir passar\npor todos os desafios,\neu compartilharei com você\nmeu bem mais precioso.\nSerá que prestamos atenção\nnas mesmas coisas?"
      }
      onPress={handlePress}
    />
  );
};

export default Suporte;
