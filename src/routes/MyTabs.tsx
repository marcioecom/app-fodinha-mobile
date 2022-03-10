import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
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

      <Screen
        name="Match"
        component={CreateGame}
        options={{
          tabBarIcon: () => (
            <TabBottomBtn />
          )
        }}
      />

      <Screen
        name="Coca"
        component={Login}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBottomIcon
              label="Coca"
              color={color}
              size={size}
              focused={focused}
              icon="dollar-sign"
            />
          )
        }}
      />

      <Screen
        name="Profile"
        component={Login}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBottomIcon
              label="Perfil"
              color={color}
              size={size}
              focused={focused}
              icon="user"
            />
          )
        }}
      />
    </Navigator>
  )
}