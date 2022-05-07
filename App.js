import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  useRef,
} from "react-native";
import { useState, useEffect } from "react";
import { Cell } from "./src/components/Grid/Cell";

const WORD = "HELLO";

export default function App() {
  const [word, setWord] = useState();
  const [state, setState] = useState([]);

  // useEffect(async () => {
  //   await fetch("https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt")
  //     .then((res) => res.text())
  //     .then((data) => setState(data.split("\n")))
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(state[5]);
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
