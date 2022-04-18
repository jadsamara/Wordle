import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { RoundedButton } from "../RoundedButton/RoundedButton";

export const Cell = () => {
  const [text, onChangeText] = useState("");
  console.log(text);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={1}
        onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        maxLength={1}
        onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        maxLength={1}
        onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        maxLength={1}
        onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        maxLength={1}
        onChangeText={onChangeText}
      />
      <View style={styles.button}>
        <RoundedButton
          title="+"
          size={50}
          //   onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    width: 50,
  },
});
