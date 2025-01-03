import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { erro, sucesso } from "@/utils/alert.utils";

const handleSend = (value: string) => {
  if (/sens[ií]vel/i.test(value)) {
    sucesso("10-horario-filme");
    return;
  }

  erro("Essa é difícil mesmo.");
};

const IntoTheWild = () => {
  useUpdateSave("09-into-the-wild");
  return (
    <Terminal
      text={"Qual foi a palavra que você usou\npara descrever Into the Wild?"}
      onSend={handleSend}
    />
  );
};

export default IntoTheWild;
