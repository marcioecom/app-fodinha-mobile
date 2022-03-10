import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='' />

      <View style={styles.user}>
        <Text style={styles.greeting}>
          Olá,
        </Text>

        <Text style={styles.username}>
          Márcio
        </Text>
      </View>
    </View>
  )
}
