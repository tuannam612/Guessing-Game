import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Input from '../screens/InputScreen';
import Game from "../screens/GameScreen";
import EndGame from "../screens/EndGameScreen";
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Input" options={{title:""}} component={Input}/>
            <Stack.Screen name="Game" options={{title:"Opponent's Guess"}} component={Game}/>
            <Stack.Screen name="EndGame" options={{title:""}} component={EndGame}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
    }
