import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { isAirplaneModeEnabledAsync, useNetworkState } from "expo-network";
import { useEffect } from "react";

const ModoAviao = () => {
  useUpdateSave("02-modo-aviao");
  const networkState = useNetworkState();

  useEffect(() => {
    isAirplaneModeEnabledAsync().then((value) => {
      if (value) {
        // sucesso(
        //   "03-suporte",
        //   "Fica a dúvida: o que mais será que esse habilidoso programador consegue fazer no meu celular além de verificar se ele está em modo avião?",
        // );
      }
    });
  }, [networkState]);

  return (
    <Terminal
      text={
        "Outros desafios exigirão\num pouco mais de... criatividade.\nPor exemplo: o que se faz, no celular,\ndurante pousos e decolagens de avião?"
      }
    />
  );
};

export default ModoAviao;
