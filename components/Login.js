import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons"

import * as firebase from "firebase";

export default function Login() {
  const [nombre, setnombre] = useState("");
  const [password, setpassword] = useState("");

  const presionar = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(nombre, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };
  return (
    <View>
      <TextInput
        placeholder="ingresa tu nombre"
        style={styles.input}
        onChange={(e) => setnombre(e.nativeEvent.text)}
      ></TextInput>
      <TextInput
      secureTextEntry={true}
        placeholder="Contraseña"
        style={styles.input}
        onChange={(e) => setpassword(e.nativeEvent.text)}
      ></TextInput>
      <Button title="Submit" color="red" onPress={presionar}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      justifyContent: "center",
      alignItems: "center",
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderRadius: 15
  },
});
