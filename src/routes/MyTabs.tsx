import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Login } from '../screens/Login';
import { Ranking } from '../screens/Ranking';
import { theme } from '../global/styles/theme';
import { styles } from './styles';
import { TabBottomIcon } from '../components/TabBottomIcon';
import { TabBottomBtn } from '../components/TabBottomBtn';

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
        component={Ranking}
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
        component={Ranking}
        options={{
          tabBarIcon: () => (
            <TabBottomBtn />
          )
        }}
      />

      <Screen
        name="Teste"
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