import React from 'react';
import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Podium } from '../../components/Podium';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
      </View>

      <View style={styles.podium}>
        <Podium />
      </View>

      <ListHeader title="Partidas" subtitle="Total 6" />
    </Background>
  )
}
