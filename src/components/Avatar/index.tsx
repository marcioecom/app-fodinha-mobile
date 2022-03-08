import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type AvatarProps = {
  urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      { urlImage
        ? (
          <Image
            source={{ uri: urlImage }}
            style={styles.avatar}
          />
        ): (
          <Feather
            name="user"
            size={24}
            color="white"
          />
        )
      }
    </LinearGradient>
  )
}
