import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Screens/Home.js'
import Profile from './src/Screens/Profile.js'
import NavBar from './src/Components/NavBar.js'
import ScheduleLunch from './src/Screens/ScheduleLunch.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Schedule Lunch" component={ScheduleLunch} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
