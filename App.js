import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Screens/Home.js'
import Profile from './src/Screens/Profile.js'
import ScheduleLunch from './src/Screens/ScheduleLunch.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useState } from 'react'
import Authenticate from './src/Components/Authenticate.js'
import { Text, View } from 'react-native'

const App = () => {
    const Tab = createBottomTabNavigator()

    const [isLoggedIn, setIsLoggedIn] = React.useState(true)

    return isLoggedIn ? (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Schedule Lunch" component={ScheduleLunch} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    ) : (
        <View>
            <Authenticate />
        </View>
    )
}

export default App;
