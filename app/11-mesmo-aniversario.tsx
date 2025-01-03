import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { erro, sucesso } from "@/utils/alert.utils";

const handleSend = (value: string) => {
  if (/bianca/i.test(value)) {
    erro("Não é a Bianca u.u");
    return;
  }

  if (/alex|turner|alex turner/i.test(value)) {
    sucesso("12-onde-nos-conhecemos");
    return;
  }

  erro(`Realmente não conheço ${value}`);
};

const MesmoAniversario = () => {
  useUpdateSave("11-mesmo-aniversario");

  return (
    <Terminal
      text={
        "Essa vai te deixar puta...\nVocê faz aniverário no mesmo dia\nque uma pessoa muito importante pra mim\nconsegue dizer quem é?"
      }
      onSend={handleSend}
    />
  );
};

export default MesmoAniversario;
