import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { erro, sucesso } from "@/utils/alert.utils";

const handleSend = (value: string) => {
  if (value === "42") {
    sucesso("09-into-the-wild");
    return;
  }

  erro("Daquele filme... o de nerd...");
};

const PerguntaFundamental = () => {
  useUpdateSave("08-pergunta-fundamental");
  return (
    <Terminal
      text={
        "Qual a resposta para a\nquestão fundamental da vida,\ndo universo e de tudo mais?"
      }
      onSend={handleSend}
    />
  );
};

export default PerguntaFundamental;
