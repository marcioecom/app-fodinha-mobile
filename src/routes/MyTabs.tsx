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
        name="Ranking"
        component={Ranking}
        options={{
          tabBarLabel: "Ranking",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBottomIcon
              label="Ranking"
              color={color}
              focused={focused}
              icon={() => <Feather name="trending-up" size={size} color={color} />}
            />
          )
        }}
      />

      <Screen
        name="Match"
        component={Ranking}
        options={{
          tabBarLabel: "Ranking",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBottomBtn />
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
              focused={focused}
              icon={() => <Feather name="user" size={size} color={color} />}
            />
          )
        }}
      />
    </Navigator>
  )
}