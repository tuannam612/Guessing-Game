import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import React from "react";
import Button from "../components/game/Button";

export default function EndGame({ navigation, route }) {
  const { guess } = route.params;
  const handlePlayAgain = () => {
    navigation.navigate("Input");
  };


  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/win.png")}
        />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.subtitle}>You have guessed: {guess} times</Text>
          <Button
            onPress={handlePlayAgain}
            title="Play Again"
            style={styles.button}
          />
          <Button title="Quit" style={styles.button} onPress={() => {
                Alert.alert("Exit app", "Are you sure you want to exit?", [
                  { text: "No" },
                  { text: "Yes", onPress: () => BackHandler.exitApp() },
                ]);
              }} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "black", 
  },
  button: {
    width: 200,
    height: 40,
    marginBottom: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
