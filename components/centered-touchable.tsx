import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

export type CenteredTouchableProps = TouchableHighlightProps;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const CenteredTouchable = ({ children, ...rest }: CenteredTouchableProps) => (
  <TouchableHighlight style={styles.main} {...rest}>
    {children}
  </TouchableHighlight>
);

export default CenteredTouchable;
