import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { IMatch } from '../../screens/Home';
import { api } from '../../services/api';
import { styles } from './styles';

type MatchProps = {
  match: IMatch;
}

type WinnerType = {
  id: string;
  name: string;
  avatar: string | null;
  ranking: {
    points: number;
  }
}

export function Match({ match }: MatchProps) {
  const [winnerinfo, setWinnerinfo] = useState<WinnerType>();
  const { secondary50, secondary70 } = theme.colors;

  useEffect(() => {
    api.get(`/users/info/${match.winner}`)
      .then((res) => setWinnerinfo(res.data))
  }, [])

  const date = new Date(match.created_at);
  const matchDate = new Date(date.getTime()).toLocaleDateString('pt-br')

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <View style={styles.matchContent}>
        <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Players</Text>
          <Text style={styles.winnerName}>{match.players.length}</Text>
        </View>

        <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Vencedor</Text>
          <Text style={styles.winnerName}>{winnerinfo?.name}</Text>
        </View>

        <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Data</Text>
          <Text style={styles.winnerName}>
            {matchDate}
          </Text>
        </View>
      </View>
    </LinearGradient>
  )
}
