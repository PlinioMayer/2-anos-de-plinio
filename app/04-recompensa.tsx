import CenteredTouchable from "@/components/centered-touchable";
import Terminal from "@/components/terminal";
import { useUpdateSave } from "@/contexts/save.context";

const handlePress = () => {};

const Suporte = () => {
  useUpdateSave("04-recompensa");

  return (
    <CenteredTouchable onPress={handlePress}>
      <Terminal
        text={
          "Se você conseguir passar por todos os desafios,\neu compartilharei com você meu bem mais precioso.\nSerá que prestamos atenção nas mesmas coisas?"
        }
      />
    </CenteredTouchable>
  );
};

export default Suporte;
