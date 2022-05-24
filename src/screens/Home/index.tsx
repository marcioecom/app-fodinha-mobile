import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Match } from '../../components/Match';
import { Podium } from '../../components/Podium';
import { Profile } from '../../components/Profile';
import { api } from '../../services/api';
import { styles } from './styles';

export interface IMatch {
  id: string;
  winner: string;
  players: string[];
  created_at: Date;
}

export function Home() {
  const navigation = useNavigation();
  const [matches, setMatches] = useState<IMatch[]>([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      api.get("/matches")
        .then((res) => setMatches(res.data))
    });
  }, [])

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
      </View>

      <View style={styles.podium}>
        <Podium />
      </View>

      <ListHeader title="Partidas" subtitle={`Total ${matches.length}`} />

      <View style={styles.matchesContainer}>
        <FlatList
          data={matches}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Match match={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          style={styles.matches}
        />
      </View>
    </Background>
  )
}
