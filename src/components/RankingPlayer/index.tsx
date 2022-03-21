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
  const date = new Date(player.updated_at);
  const fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

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
            { fullDate }
          </Text>
        </View>
      </View>
      <ListDivider />
    </>
  )
}
