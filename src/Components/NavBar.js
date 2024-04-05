import { useNavigation } from '@react-navigation/native'
import { Text, View, TouchableOpacity } from 'react-native'

export default function NavBar() {
  const navigation = useNavigation()

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <View className="flex-1 justify-center items-center flex-row gap-10 max-h-32">
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Schedule Lunch')}>
        <Text>Schedule Lunch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
