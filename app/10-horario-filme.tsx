import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { erro, sucesso } from "@/utils/alert.utils";

const handlePress = () => {
  const date = new Date();

  if (date.getHours() === 21) {
    sucesso("11-mesmo-aniversario");
    return;
  }

  if (date.getHours() === 20) {
    erro("O horário original...");
    return;
  }

  erro(`Agora são exatamente ${date.getHours()}:${date.getMinutes()}`);
};

const HorarioFilme = () => {
  useUpdateSave("10-horario-filme");

  return (
    <Terminal
      text={"Qual foi o horário original\ndesignado para assistirmos filminho?"}
      onPress={handlePress}
    />
  );
};

export default HorarioFilme;
