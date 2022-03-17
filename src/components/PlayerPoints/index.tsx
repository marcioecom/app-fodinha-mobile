import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { api } from '../../services/api';
import { styles } from './styles';
import { useMatch } from '../../hooks/useMatch';

type PlayerPointsProps = {
  userId: string,
  position: number,
}

type PlayerType = {
  id: string,
  name?: string,
  avatar: string | null
}

export function PlayerPoints({ userId, position }: PlayerPointsProps) {
  const { handlePlus, handleMinus, points } = useMatch();
  const [player, setPlayer] = useState<PlayerType | null>();

  useEffect(() => {
    (async () => {
      api.get(`/users/info/${userId}`)
        .then((res) => setPlayer(res.data));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>
        { player?.name }
      </Text>

      <View style={styles.counter}>
        <RectButton
          onPress={() => handlePlus(position)}
          style={styles.btn}
        >
          <Feather name="plus" color="white" size={20} />
        </RectButton>

        <Text style={styles.point}>
          { points[position] }
        </Text>

        <RectButton
          onPress={() => handleMinus(position)}
          style={styles.btn}
        >
          <Feather name="minus" color="white" size={20} />
        </RectButton>
      </View>
    </View>
  )
}
