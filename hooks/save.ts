import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const SAVE_KEY = "SAVE";

export const useSave = (level: string): void => {
  useEffect(() => {
    AsyncStorage.setItem(SAVE_KEY, level);
  }, [level]);
};

export const useLoad = (): string | undefined | null => {
  const [save, setSave] = useState<string | undefined | null>();
  useEffect(() => {
    AsyncStorage.getItem(SAVE_KEY).then(setSave);
  }, []);

  return save;
};
