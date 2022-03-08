import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../Avatar';
import { ListDivider } from '../ListDivider';
import { styles } from './styles';

type PlayerObj = {
  id: string;
  points: number;
  updated_at: string;
  user: {
    name: string;
    email: string;
  }
}

interface IPlayer {
  player: PlayerObj;
}

export function RankingPlayer({ player }: IPlayer) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.rankingColumn}>
          <Avatar urlImage='' />
        </View>

        <View style={styles.rankingColumn}>
          <Text style={styles.playerName}>
            { player.user.name }
          </Text>
        </View>

        <View style={styles.rankingColumn}>
          <Text style={styles.points}>
            { player.points }
          </Text>
        </View>

        <View style={styles.rankingColumn}>
          <Text style={styles.lastWin}>
            { new Date(Date.parse(player.updated_at)).toLocaleDateString() }
          </Text>
        </View>
      </View>
      <ListDivider />
    </>
  )
}
