import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './MyTabs';
import { Game } from '../screens/Game';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen
          name="Root"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Screen
          name="Game"
          component={Game}
        />
      </Navigator>
    </NavigationContainer>
  )
}
