import { View, TextInput, StyleSheet, Text } from "react-native";

import { useState, useRef } from "react";
import { RoundedButton } from "../RoundedButton/RoundedButton";

export const Cell = ({
  addWordOne,
  addWordTwo,
  addWordThree,
  addWordFour,
  addWordFive,
  value,
}) => {
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
          style={styles.input}
          blurOnSubmit={true}
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
          style={styles.input}
          maxLength={1}
        />
        <TextInput
          onChangeText={(letterThree) => {
            if (letterThree.length === 1) {
              ref4.current.focus();
            }
            onChangeLetterThree(letterThree);
          }}
          ref={ref3}
          style={styles.input}
        />
        <TextInput
          onChangeText={(letterFour) => {
            if (letterFour.length === 1) {
              ref5.current.focus();
            }
            onChangeLetterFour(letterFour);
          }}
          ref={ref4}
          style={styles.input}
        />
        <TextInput
          onChangeText={(letterFive) => {
            if (letterFive.length === 1) {
              addWordOne(letterOne);
              addWordTwo(letterTwo);
              addWordThree(letterThree);
              addWordFour(letterFour);
              addWordFive(letterFive);
            }
            onChangeLetterFive(letterFive);
          }}
          ref={ref5}
          style={styles.input}
          maxLength={1}
        />
      </View>
    </View>
  );
};

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
});
