import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Screens/Home.js'
import Profile from './src/Screens/Profile.js'
import { createStackNavigator } from '@react-navigation/stack'
import NavBar from './src/Components/NavBar.js'
import ScheduleLunch from './src/Screens/ScheduleLunch.js'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator className="flex-1">
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Schedule Lunch'} component={ScheduleLunch} />
        <Stack.Screen name={'Profile'} component={Profile} />
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
  )
}
