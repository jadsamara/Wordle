import { View, TextInput, StyleSheet, Text } from "react-native";

import { useState } from "react";
import { RoundedButton } from "../RoundedButton/RoundedButton";

export const Cell = ({
  addWordOne,
  addWordTwo,
  addWordThree,
  addWordFour,
  addWordFive,
  theWord,
}) => {
  const [letterOne, onChangeLetterOne] = useState("");
  const [letterTwo, onChangeLetterTwo] = useState("");
  const [letterThree, onChangeLetterThree] = useState("");
  const [letterFour, onChangeLetterFour] = useState("");
  const [letterFive, onChangeLetterFive] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          blurOnSubmit={false}
          onChangeText={(letterOne) => {
            if (letterOne.length === 1) {
              secondTextInput.focus();
            }
            onChangeLetterOne(letterOne);
          }}
        />
        <TextInput
          onChangeText={(letterTwo) => {
            if (letterTwo.length === 1) {
              thirdTextInput.focus();
            }
            onChangeLetterTwo(letterTwo);
          }}
          ref={(input) => {
            secondTextInput = input;
          }}
          style={styles.input}
          maxLength={1}
        />
        <TextInput
          onChangeText={(letterThree) => {
            if (letterThree.length === 1) {
              fourthTextInput.focus();
            }
            onChangeLetterThree(letterThree);
          }}
          ref={(input) => {
            thirdTextInput = input;
          }}
          style={styles.input}
        />
        <TextInput
          onChangeText={(letterFour) => {
            if (letterFour.length === 1) {
              fifthTextInput.focus();
            }
            onChangeLetterFour(letterFour);
          }}
          ref={(input) => {
            fourthTextInput = input;
          }}
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
          ref={(input) => {
            fifthTextInput = input;
          }}
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
