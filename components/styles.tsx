import { StyleSheet, StyleProp, ViewStyle } from "react-native";

interface Styles {
  container: StyleProp<ViewStyle>;
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});

export default styles;
