import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
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
  const [matches, setMatches] = useState<IMatch[]>([]);

  useEffect(() => {
    api.get("/matches")
      .then((res) => setMatches(res.data))
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

      <View style={styles.matches}>
        { matches 
          ? (matches.map((match, i) => (
            <Match match={match} index={i} key={i} />
          )))
          : <Text>Sem partidas recentes</Text>
        }
      </View>
    </Background>
  )
}
