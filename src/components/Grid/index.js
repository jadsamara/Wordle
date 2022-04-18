import { View, StyleSheet } from "react-native";
import { Cell } from "./Cell";

export const Grid = () => {
  return (
    <View style={styles.container}>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
  },
});
