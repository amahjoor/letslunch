import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">LetsLunch</Text>
      <StatusBar />
    </View>
  );
}
