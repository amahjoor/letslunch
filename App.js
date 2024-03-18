import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/Screens/Home.js'
import Account from './src/Screens/Account.js'
import InstantLunch from './src/Screens/InstantLunch.js'
import Profile from './src/Screens/Profile.js'

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator className="flex-1">
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Instant Lunch'} component={InstantLunch} />
        <Tab.Screen name={'Profile'} component={Profile} />
        <Tab.Screen name={'Account'} component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
