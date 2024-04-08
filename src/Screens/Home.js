import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ScheduleLunch from './ScheduleLunch'

const Stack = createStackNavigator()

function HomeScreen() {
    const navigation = useNavigation()

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <View className="flex-1 justify-center items-center">
            <Text className="font-bold">LetsLunch</Text>
            <StatusBar />
            <TouchableOpacity
                onPress={() => navigateToScreen('Schedule Lunch')}
            >
                <Text>Schedule Lunch!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ScheduleLunch" component={ScheduleLunch} />
        </Stack.Navigator>
    )
}
