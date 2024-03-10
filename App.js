import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/Screens/Home.js'
import Login from './src/Screens/Login.js'
import InstantLunch from './src/Screens/InstantLunch.js'
import Settings from './src/Screens/Settings.js'

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Instant Lunch'} component={InstantLunch} />
        <Tab.Screen name={'Settings'} component={Settings} />
        <Tab.Screen name={'Login'} component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
