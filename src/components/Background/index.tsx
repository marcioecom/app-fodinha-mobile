import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type BackgroundProps = {
  children: ReactNode
}

export function Background({ children }: BackgroundProps) {
  const {secondary100, secondary70} = theme.colors;

  return (
    <LinearGradient
      colors={[secondary70, secondary100]}
      style={styles.container}
    >
      { children }
    </LinearGradient>
  )
}
