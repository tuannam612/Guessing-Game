import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  BackHandler,
  Alert,
  StatusBar,
} from "react-native";
import Button from "../components/game/Button";
import GuessCard from "../components/ui/GuessCard";
export default function Game({ navigation, route }) {
  const myNum = route.params.data;
  const [number, setNumber] = useState(
    Math.floor(Math.random() * (100 - 1)) + 1
  );
  const [highestNum, setHighestNum] = useState(100);
  const [lowestNum, setLowestNum] = useState(1);
  const [bingo, setBingo] = useState(false);
  const [history] = useState([]);

  useEffect(() => {
    generateNumber(lowestNum, highestNum);
  }, [lowestNum, highestNum]);

  function generateNumber(min, max) {
    setNumber(Math.floor(Math.random() * (max - min) + min));
  }

  function handleLowerPress() {
    if (number <= myNum) {
      Alert.alert("Ops", "Maybe a little bit higher,  just check the Bingo!!!", [
        { text: "OK" },
      ]);
    } else {
      setHighestNum(number);
      history.push(number);
    }
  }
  function handleGreaterPress() {
    if (number >= myNum) {
      Alert.alert("Ops", "Maybe a little bit lower,  just check the Bingo!!!", [
        { text: "OK" },
      ]);
    } else {
      setLowestNum(number + 1);
      history.push(number);
    }
  }

  function disableButton(number, buttonCheck) {
    if ((buttonCheck === "Lower" && number <= myNum) || bingo === true) {
      return true;
    }
    if ((buttonCheck === "Greater" && number >= myNum) || bingo === true) {
      return true;
    }
    return false;
  }

  function handleBingoPress() {
    if (number == myNum) {
      setBingo(true);
      history.push(number);
      navigation.navigate("EndGame", { guess: history.length });
    } else {
      Alert.alert("You are very close?!", "Just try again!!!", [
        { text: "Continue to try!!!" },
      ]);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.centeredContent}>
          <GuessCard>
          <Text style={styles.OpnGuess}>Opponent's Guess</Text>
          <Text style={styles.guess}>{number}</Text>
          </GuessCard>
          <View style={styles.content}>
            <Text style={styles.title}>Higher or Lower</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="-" 
                style={
                  disableButton(number, "Lower")
                    ? styles.buttonDisabled
                    : styles.button
                }
                onPress={() => {handleLowerPress()}}
              />
              <Button
                title="Bingo!"
                styles={bingo ? styles.buttonDisabled : styles.button}
                disabled={bingo}
                onPress={() => {
                  handleBingoPress();
                }}
              />
              <Button
                title="+"
                styles={
                  disableButton(number, "Greater")
                    ? styles.buttonDisabled
                    : styles.button
                }
                onPress={() => {handleGreaterPress()}}
              />
            </View>
          </View>

          <FlatList
            style={styles.listContainer}
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>
                  Attempt {index + 1}: {item}
                </Text>
              </View>
            )}
          />
          <View style={styles.functionButton}>
            <Button
              title="Play Again"
              styles={styles.button}
              onPress={() => navigation.navigate("Input")}
            />
            <Button
              title="Quit"
              styles={styles.button}
              onPress={() => {
                Alert.alert("Exit app", "Are you sure you want to exit?", [
                  { text: "No" },
                  { text: "Yes", onPress: () => BackHandler.exitApp() },
                ]);
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  OpnGuess:{
    fontSize: 30,
    fontWeight: "bold",
  },

  centeredContent: {
    alignItems: "center",
    gap: 30,
    
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    backgroundColor: "#EBFDFE",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  functionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "black",
  },
  guess: {
    fontSize: 40,
    margin: 20,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 80,
    paddingRight: 80,
    borderWidth: 1,
    color: "black",
    backgroundColor: "#EBFDFE",
  },
  listContainer: {
    width: "100%",
    flex: 1,
    marginTop: 20,
  },
  listItem: {
    backgroundColor: "#EBFDFE", 
    paddingTop: 20,
    paddingLeft: 80,
    paddingRight: 80,
    paddingBottom: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    },
  listItemText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#EBFDFE", 
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 120,
  },
  buttonDisabled: {
    backgroundColor: "#EBFDFE", 
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 120,
  },
});
