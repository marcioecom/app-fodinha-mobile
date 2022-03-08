import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type TabBottomIconProps = {
  icon: React.FC,
  label: string,
  color: string,
  focused: boolean,
}

export function TabBottomIcon({ icon: Icon, label, color, focused }: TabBottomIconProps) {
  return (
    <View style={styles.container}>
      <Icon />
      <Text
        style={[styles.label,
          { color: focused ? color : "#748c94" }
        ]}
      >
        { label }
      </Text>
    </View>
  )
}
