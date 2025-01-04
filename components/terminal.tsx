import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemedText } from "./themed-text";
import {
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import { Colors } from "@/constants/colors";
import CenteredTouchable from "./centered-touchable";
import { ThemedView } from "./themed-view";
import { Ionicons } from "@expo/vector-icons";

export type TerminalProps = {
  text: string;
  onPress?: TouchableHighlightProps["onPress"];
  onSend?: (value: string) => void;
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    borderRadius: 5,
    borderColor: Colors.tint,
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
    color: Colors.tint,
  },
  input: {
    flex: 1,
    color: Colors.tint,
  },
});

const Terminal = ({ text, onSend, onPress }: TerminalProps) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<TextInput>() as MutableRefObject<TextInput>;
  let interval = useRef<number | NodeJS.Timeout>();
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);
  const handlePress = useCallback(
    (e: GestureResponderEvent) => {
      if (text !== currentText) {
        setCurrentText(text);
        clearInterval(interval.current);
        return;
      }

      if (onPress) {
        onPress(e);
      }
    },
    [onPress, text, currentText],
  );
  const handleSend = useCallback(() => {
    if (onSend) {
      onSend(input);
    }
  }, [onSend, input]);

  useEffect(() => {
    let auxText = "";

    interval.current = setInterval(() => {
      if (auxText.length === text.length) {
        clearInterval(interval.current);
        if (onSend) {
          focusInput();
        }
        return;
      }
      auxText += text[auxText.length];
      setCurrentText(auxText);
    }, 50);

    return () => {
      clearInterval(interval.current);
    };
  }, [setCurrentText, text, focusInput, onSend]);

  return (
    <CenteredTouchable onPress={handlePress}>
      <ThemedView>
        <ThemedText>{currentText}</ThemedText>
        <ThemedView
          style={[
            styles.inputWrapper,
            onSend && currentText === text
              ? { opacity: 1 }
              : { opacity: 0, width: 0, height: 0 },
          ]}
        >
          <TextInput
            onChangeText={setInput}
            style={styles.input}
            ref={inputRef}
            onSubmitEditing={handleSend}
            value={input}
            selectionColor={Colors.tint}
          />
          <TouchableHighlight onPress={handleSend}>
            <Ionicons name="send" size={20} color={Colors.tint} />
          </TouchableHighlight>
        </ThemedView>
      </ThemedView>
    </CenteredTouchable>
  );
};

export default Terminal;
