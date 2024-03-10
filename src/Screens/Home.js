import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import react from 'react'

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">LetsLunch</Text>
      <StatusBar />
    </View>
  )
}
