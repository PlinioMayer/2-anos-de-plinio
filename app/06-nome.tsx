import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { erro, sucesso } from "@/utils/alert.utils";

const handleSend = (value: string) => {
  if (/liliana/i.test(value)) {
    sucesso("07-primeiro-filme");
    return;
  }

  erro("Seu nome pra mim...");
};

const Nome = () => {
  useUpdateSave("06-nome");
  return <Terminal text={"Qual é o seu nome?"} onSend={handleSend} />;
};

export default Nome;
