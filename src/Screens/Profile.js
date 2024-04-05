import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Profile() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">Profile</Text>
      <StatusBar />
    </View>
  )
}