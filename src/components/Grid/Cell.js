import { View, TextInput, StyleSheet, Text } from "react-native";

import { useState, useRef } from "react";

const WORD = "HELLO";

export const Cell = ({ addWord }) => {
  const [letterOne, onChangeLetterOne] = useState("");
  const [letterTwo, onChangeLetterTwo] = useState("");
  const [letterThree, onChangeLetterThree] = useState("");
  const [letterFour, onChangeLetterFour] = useState("");
  const [letterFive, onChangeLetterFive] = useState("");

  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={
            letterOne === WORD.charAt(0)
              ? styles.green
              : letterOne === WORD.charAt(1) ||
                letterOne === WORD.charAt(2) ||
                letterOne === WORD.charAt(3) ||
                letterOne === WORD.charAt(4)
              ? styles.yellow
              : styles.input
          }
          onChangeText={(letterOne) => {
            if (letterOne.length === 1) {
              ref2.current.focus();
            }
            onChangeLetterOne(letterOne);
          }}
        />
        <TextInput
          onChangeText={(letterTwo) => {
            if (letterTwo.length === 1) {
              ref3.current.focus();
            }
            onChangeLetterTwo(letterTwo);
          }}
          ref={ref2}
          style={
            letterTwo === WORD.charAt(1)
              ? styles.green
              : letterTwo === WORD.charAt(0) ||
                letterTwo === WORD.charAt(2) ||
                letterTwo === WORD.charAt(3) ||
                letterTwo === WORD.charAt(4)
              ? styles.yellow
              : styles.input
          }
        />
        <TextInput
          onChangeText={(letterThree) => {
            if (letterThree.length === 1) {
              ref4.current.focus();
            }
            onChangeLetterThree(letterThree);
          }}
          ref={ref3}
          style={
            letterThree === WORD.charAt(2)
              ? styles.green
              : letterThree === WORD.charAt(1) ||
                letterThree === WORD.charAt(0) ||
                letterThree === WORD.charAt(3) ||
                letterThree === WORD.charAt(4)
              ? styles.yellow
              : styles.input
          }
        />
        <TextInput
          onChangeText={(letterFour) => {
            if (letterFour.length === 1) {
              ref5.current.focus();
            }
            onChangeLetterFour(letterFour);
          }}
          ref={ref4}
          style={
            letterFour === WORD.charAt(3)
              ? styles.green
              : letterFour === WORD.charAt(1) ||
                letterFour === WORD.charAt(2) ||
                letterFour === WORD.charAt(0) ||
                letterFour === WORD.charAt(4)
              ? styles.yellow
              : styles.input
          }
        />
        <TextInput
          onChangeText={(letterFive) => {
            if (letterFive.length === 1) {
              onChangeLetterFive(letterFive);
            }
            addWord(
              letterOne + letterTwo + letterThree + letterFour + letterFive
            );
          }}
          ref={ref5}
          style={
            letterFive === WORD.charAt(4)
              ? styles.green
              : letterFive === WORD.charAt(1) ||
                letterFive === WORD.charAt(2) ||
                letterFive === WORD.charAt(3) ||
                letterFive === WORD.charAt(0)
              ? styles.yellow
              : styles.input
          }
          maxLength={1}
        />
      </View>
    </View>
  );
};

const x = StyleSheet.create({
  input: {
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
  green: {
    backgroundColor: "green",
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
  yellow: {
    backgroundColor: "yellow",
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
  red: {
    backgroundColor: "red",
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
});

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
  green: {
    backgroundColor: "green",
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
  yellow: {
    backgroundColor: "yellow",
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
  red: {
    backgroundColor: "red",
    height: 50,
    margin: 8,
    borderWidth: 1,
    width: 50,
  },
});
