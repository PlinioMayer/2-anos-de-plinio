import { MutableRefObject, useEffect, useRef, useState } from "react";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "@/constants/colors";

export type TerminalProps = {
  text: string;
  expectedInput?: string;
};

const styles = StyleSheet.create({
  cursor: {
    width: 8,
    height: 15,
    backgroundColor: Colors.text,
  },
  inputFeedback: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
  },
  input: {
    opacity: 0,
  },
});

const Terminal = ({ text, expectedInput }: TerminalProps) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [cursorOpacity, setCursorOpacity] = useState<0 | 1>(0);
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<TextInput>() as MutableRefObject<TextInput>;

  useEffect(() => {
    let auxText = "";
    let flickeringInterval: number | NodeJS.Timeout;
    let auxCursorDisplay: 0 | 1 = 0;

    const interval = setInterval(() => {
      if (auxText.length === text.length) {
        clearInterval(interval);
        inputRef.current?.focus();
        flickeringInterval = setInterval(() => {
          auxCursorDisplay = auxCursorDisplay === 0 ? 1 : 0;
          setCursorOpacity(auxCursorDisplay);
        }, 400);
        return;
      }
      auxText += text[auxText.length];
      setCurrentText(auxText);
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(flickeringInterval);
    };
  }, [setCurrentText, setCursorOpacity, inputRef, text]);

  return (
    <ThemedView>
      <ThemedText>{currentText}</ThemedText>
      <ThemedView style={styles.inputFeedback}>
        <ThemedText>{input}</ThemedText>
        <View style={[styles.cursor, { opacity: cursorOpacity }]} />
      </ThemedView>
      {expectedInput && (
        <TextInput
          onChangeText={setInput}
          style={styles.input}
          ref={inputRef}
        />
      )}
    </ThemedView>
  );
};

export default Terminal;
