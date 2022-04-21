import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  useRef,
} from "react-native";
import { useState } from "react";
import { Cell } from "./src/components/Grid/Cell";

const WORD = "HELLO";

export default function App() {
  const [word, setWord] = useState();

  fetch("https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt")
    .then((response) => {
      return response;
    })
    .then((data) => {
      console.log(data);
    });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Wordle</Text>

      {word === WORD ? (
        <Cell />
      ) : (
        <View style={styles.grid}>
          <Cell addWord={setWord} />
          <Cell addWord={setWord} />
          <Cell addWord={setWord} />
          <Cell addWord={setWord} />
          <Cell addWord={setWord} />
          <Cell addWord={setWord} />

          <Text style={{ fontSize: 20, paddingTop: 50, textAlign: "center" }}>
            Word of the day is: {WORD}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
  },
  grid: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
