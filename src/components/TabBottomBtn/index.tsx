import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function TabBottomBtn({ ...rest }) {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <Feather
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}
