import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import GameScreen from './screens/GameScreen'

YellowBox.ignoreWarnings([
  'Setting a timer'
]);

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          {/* Login Screen */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />

          {/* Game Screen */}
          <Stack.Screen
            name="Game"
            component={GameScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}