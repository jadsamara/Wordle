import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import { useState } from "react";
import { Cell } from "./src/components/Grid/Cell";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const WORD = "HELLO";

export default function App() {
  const [wordOne, setCurrentWordOne] = useState("");
  const [wordTwo, setCurrentWordTwo] = useState("");
  const [wordThree, setCurrentWordThree] = useState("");
  const [wordFour, setCurrentWordFour] = useState("");
  const [wordFive, setCurrentWordFive] = useState("");

  console.log(wordOne + wordTwo + wordThree + wordFour + wordFive);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Wordle</Text>
      {wordOne + wordTwo + wordThree + wordFour + wordFive === WORD ? (
        Alert.alert("WORDS MATCH")
      ) : (
        <View style={styles.grid}>
          <Cell
            addWordOne={setCurrentWordOne}
            addWordTwo={setCurrentWordTwo}
            addWordThree={setCurrentWordThree}
            addWordFour={setCurrentWordFour}
            addWordFive={setCurrentWordFive}
            value={100}
          />
          <Cell
            addWordOne={setCurrentWordOne}
            addWordTwo={setCurrentWordTwo}
            addWordThree={setCurrentWordThree}
            addWordFour={setCurrentWordFour}
            addWordFive={setCurrentWordFive}
            value={200}
          />
          <Cell
            addWordOne={setCurrentWordOne}
            addWordTwo={setCurrentWordTwo}
            addWordThree={setCurrentWordThree}
            addWordFour={setCurrentWordFour}
            addWordFive={setCurrentWordFive}
            value={300}
          />
          <Cell
            addWordOne={setCurrentWordOne}
            addWordTwo={setCurrentWordTwo}
            addWordThree={setCurrentWordThree}
            addWordFour={setCurrentWordFour}
            addWordFive={setCurrentWordFive}
            value={400}
          />
          <Cell
            addWordOne={setCurrentWordOne}
            addWordTwo={setCurrentWordTwo}
            addWordThree={setCurrentWordThree}
            addWordFour={setCurrentWordFour}
            addWordFive={setCurrentWordFive}
            value={500}
          />
          <Cell
            addWordOne={setCurrentWordOne}
            addWordTwo={setCurrentWordTwo}
            addWordThree={setCurrentWordThree}
            addWordFour={setCurrentWordFour}
            addWordFive={setCurrentWordFive}
            value={600}
          />
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
