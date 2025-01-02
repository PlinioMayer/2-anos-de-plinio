import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";
import { sucesso } from "@/utils/alert.utils";
import { Alert } from "react-native";

const onSend = (value: string) => {
  if (!/obrigad[oa]|grat[oa]|gratid[aã]o|gratiluz/i.test(value)) {
    // Alert.alert("Oops, nananinanão...");
    return;
  }

  let message = "";

  if (/obrigado|grato/i.test(value)) {
    message = "Olha eu apoiando os LGBTQIAPN+";
  } else if (/gratid[aã]o/i.test(value)) {
    message = "Gratidão, Lilly, sério?";
  } else if (/gratiluz/i.test(value)) {
    message = "GRATILUZ?";
  }

  // sucesso("02-modo-aviao", message);
};

const Agradecimento = () => {
  useUpdateSave("01-agradecimento");

  return (
    <Terminal
      text={
        "A maioria dos desafios seguirá\num formato de perguntas e respostas.\nPor exemplo: o que se diz quando\nse ganha um presente?"
      }
      onSend={onSend}
    />
  );
};

export default Agradecimento;
