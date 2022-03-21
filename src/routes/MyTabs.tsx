import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ranking } from '../screens/Ranking';
import { styles } from './styles';
import { TabBottomIcon } from '../components/TabBottomIcon';
import { TabBottomBtn } from '../components/TabBottomBtn';
import { CreateGame } from '../screens/CreateGame';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          ...styles.tabBar,
          ...styles.shadow
        }
      }}

    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBottomIcon
              label="Home"
              color={color}
              size={size}
              focused={focused}
              icon="home"
            />
          )
        }}
      />

      <Screen
        name="CreateMatch"
        component={CreateGame}
        options={{
          tabBarIcon: () => (
            <TabBottomBtn />
          )
        }}
      />

      <Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBottomIcon
              label="Ranking"
              color={color}
              size={size}
              focused={focused}
              icon="bar-chart-2"
            />
          )
        }}
      />
    </Navigator>
  )
}