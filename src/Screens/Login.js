import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import react from 'react'

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">Login</Text>
      <StatusBar />
    </View>
  )
}