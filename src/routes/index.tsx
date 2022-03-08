import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { MyTabs } from './MyTabs';

export function Routes() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
