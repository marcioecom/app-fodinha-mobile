import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar';
import { styles } from './styles';

type Props = {
  username: string,
  urlImage?: string,
  position: number,
}

export function PodiumPosition({ username, urlImage, position }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Text style={styles.position}>
        { `${position + 1}°` }
      </Text>

      <Avatar urlImage={urlImage ? urlImage: ''} />

      <Text style={styles.username}>
        {username}
      </Text>
    </LinearGradient>
  )
}
