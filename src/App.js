import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Login from "./Authentication/login";
import React from "react";

export default function App() {
  return (
    <View>
      <Text>Lets Lunch</Text>
      <StatusBar />
    </View>
  );
}
