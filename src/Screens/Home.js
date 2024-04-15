import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ScheduleLunch from './ScheduleLunch'

const Stack = createStackNavigator()

export default function Home() {
    const navigation = useNavigation()

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <View>
            <Text>LetsLunch</Text>
            <StatusBar />
            <TouchableOpacity
                onPress={() => navigateToScreen('Schedule Lunch')}
            >
                <Text>Schedule Lunch!</Text>
            </TouchableOpacity>
        </View>
    )
}
