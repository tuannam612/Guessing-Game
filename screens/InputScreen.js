import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/game/Button";
import Card from "../components/ui/Card";
import TitleCard from "../components/ui/TitleCard";
export default function Input({ navigation }) {
  const windowHeight = useWindowDimensions().height;
  const [number, setNumber] = useState("");
  const validate = (number) => {
    if (number > 0 && number <= 100) {
      navigation.navigate("Game", { data: number });
    } else {
      alert("Please enter number between 0 and 100");
    }
  };
  const styles = StyleSheet.create({
    container: {
      minHeight: Math.round(windowHeight) - StatusBar.currentHeight,
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 35,
    },
    background: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: -1,
      opacity: 0.9,
      flex: 1,
    },
    body: {
      fontSize: 20,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: 200,
      height: 60,
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      fontSize: 20,
    },
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <StatusBar style="auto" />
        <TitleCard>
          <Text style={styles.title}>Number Guessing</Text>
        </TitleCard>
        <Card>
          <Text style={styles.body}>Please enter a number from 0 to 99:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your number"
            onChangeText={(number) => setNumber(number)}
            keyboardType="numeric"
            maxLength={2}
          ></TextInput>

          <Button
            style={styles.button}
            title="Play"
            onPress={() => validate(number)}
          />
        </Card>
      </ImageBackground>
    </View>
  );
}
