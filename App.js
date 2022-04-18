import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Cell } from "./src/Grid/Cell";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Wordle</Text>
      <Cell />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
  },
});
