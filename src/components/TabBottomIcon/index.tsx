import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type TabBottomIconProps = {
  icon: keyof typeof Feather.glyphMap,
  label: string,
  size: number,
  color: string,
  focused: boolean,
}

export function TabBottomIcon({ icon, label, size, color, focused }: TabBottomIconProps) {
  const { highlight } = theme.colors;

  return (
    <View style={styles.container}>
      <Feather
        size={size}
        name={icon}
        color={focused ? color : highlight}
      />
      <Text
        style={[styles.label,
          { color: focused ? color : highlight }
        ]}
      >
        { label }
      </Text>
    </View>
  )
}
