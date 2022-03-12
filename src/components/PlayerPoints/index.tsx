import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { api } from '../../services/api';
import { styles } from './styles';

type PlayerPointsProps = {
  userId: string;
}

type PlayerType = {
  id: string,
  name?: string,
  avatar: string | null
}

export function PlayerPoints({ userId }: PlayerPointsProps) {
  const [player, setPlayer] = useState<PlayerType | null>();
  const [points, setPoints] = useState(5);

  useEffect(() => {
    (async () => {
      api.get(`/users/info/${userId}`)
        .then((res) => setPlayer(res.data));
    })();
  }, []);

  function handleMinus() {
    setPoints(prev => prev - 1);
  }

  function handlePlus() {
    setPoints(prev => prev + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>
        { player?.name }
      </Text>

      <View style={styles.counter}>
        <RectButton onPress={handlePlus} style={styles.btn}>
          <Feather name="plus" color="white" size={20} />
        </RectButton>

        <Text style={styles.point}>
          { points }
        </Text>

        <RectButton onPress={handleMinus} style={styles.btn}>
          <Feather name="minus" color="white" size={20} />
        </RectButton>
      </View>
    </View>
  )
}
