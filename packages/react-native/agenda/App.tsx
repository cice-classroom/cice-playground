import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from './src/home'
import { About } from './src/about'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator()

export const App: React.FC = () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
      <Tabs.Screen name="About" component={About} />
    </Tabs.Navigator>
  </NavigationContainer>
)
