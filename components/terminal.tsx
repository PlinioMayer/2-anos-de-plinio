import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export type TerminalProps = {
  text: string;
  onSend?: (value: string) => void;
};

const styles = StyleSheet.create({
  cursor: {
    width: 8,
    height: 15,
    backgroundColor: Colors.text,
  },
  inputWrapper: {
    flexDirection: "row",
    borderRadius: 5,
    borderColor: Colors.tint,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    alignItems: "center",
  },
  inputTouchable: {
    flex: 1,
  },
  inputFeedback: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    flex: 1,
  },
  input: {
    opacity: 0,
    height: 0,
    width: 0,
  },
});

const Terminal = ({ text, onSend }: TerminalProps) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [cursorOpacity, setCursorOpacity] = useState<0 | 1>(0);
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<TextInput>() as MutableRefObject<TextInput>;
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);
  const handlePress = useCallback(() => {
    if (onSend) {
      onSend(input);
    }
  }, [onSend, input]);

  useEffect(() => {
    let auxCursorOpacity: 0 | 1 = 0;

    const interval = setInterval(() => {
      auxCursorOpacity = auxCursorOpacity === 0 ? 1 : 0;
      setCursorOpacity(auxCursorOpacity);
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, [setCursorOpacity]);

  useEffect(() => {
    let auxText = "";

    const interval = setInterval(() => {
      if (auxText.length === text.length) {
        clearInterval(interval);
        focusInput();
        return;
      }
      auxText += text[auxText.length];
      setCurrentText(auxText);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [setCurrentText, text, focusInput]);

  return (
    <ThemedView>
      <ThemedText>{currentText}</ThemedText>
      {onSend && currentText === text && (
        <View style={styles.inputWrapper}>
          <TouchableWithoutFeedback
            style={styles.inputTouchable}
            onPress={focusInput}
          >
            <View style={styles.inputFeedback}>
              <ThemedText>{input}</ThemedText>
              <View style={[styles.cursor, { opacity: cursorOpacity }]} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableHighlight onPress={handlePress}>
            <Ionicons name="send" size={20} color={Colors.tint} />
          </TouchableHighlight>
          <TextInput
            onChangeText={setInput}
            style={styles.input}
            ref={inputRef}
            onSubmitEditing={handlePress}
          />
        </View>
      )}
    </ThemedView>
  );
};

export default Terminal;
