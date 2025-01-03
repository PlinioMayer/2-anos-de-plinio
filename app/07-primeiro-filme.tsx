import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { erro, sucesso } from "@/utils/alert.utils";

const handleSend = (value: string) => {
  if (/saltburn/i.test(value)) {
    sucesso("08-pergunta-fundamental");
    return;
  }

  erro("Essa devia ser a mais fácil...");
};

const PrimeiroFilme = () => {
  useUpdateSave("07-primeiro-filme");
  return (
    <Terminal text={"Qual foi nosso primeiro filme?"} onSend={handleSend} />
  );
};

export default PrimeiroFilme;
