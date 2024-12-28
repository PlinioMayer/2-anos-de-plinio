import { createContext, ReactNode, useCallback, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScreenName } from "@/constants/screens";

export type SaveValue = {
  save?: ScreenName | null;
  setSave: (value: ScreenName) => void;
};

export const SAVE_KEY = "save";

export const SaveContext = createContext<SaveValue>({ setSave: () => {} });

export const useSave = () => useContext(SaveContext);

export const SaveProvider = ({ children }: { children: ReactNode }) => {
  const [save, setSave] = useState<ScreenName | undefined | null>();
  const setSaveCallback = useCallback(
    (value: ScreenName) => {
      AsyncStorage.setItem(SAVE_KEY, value).then(() => {
        setSave(value);
      });
    },
    [setSave],
  );

  useEffect(() => {
    AsyncStorage.getItem(SAVE_KEY).then((value: string | null) => {
      setSave(value as ScreenName);
    });
  }, [setSave]);

  return (
    <SaveContext.Provider value={{ save, setSave: setSaveCallback }}>
      {children}
    </SaveContext.Provider>
  );
};

export default SaveProvider;
