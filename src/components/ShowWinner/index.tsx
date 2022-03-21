import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { api } from '../../services/api';
import { styles } from './styles';
import { useMatch } from '../../hooks/useMatch';

type PlayerType = {
  id: string,
  name?: string,
  avatar: string | null
}

export function ShowWinner() {
  const { winner, match } = useMatch();
  const [newPoints, setNewPoints] = useState();
  const [playerWinner, setPlayerWinner] = useState<PlayerType | null>();

  useEffect(() => {
    (async () => {
      api.get(`/users/info/${winner?.player}`)
        .then((res) => setPlayerWinner(res.data));

      api.put('/ranking', { userId: winner?.player })
        .then((res) => setNewPoints(res.data.points))

      await api.put(`/matches/${match?.id}`, { winnerId: playerWinner?.id })
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      { `${playerWinner?.name} venceu!` }
      </Text>
      <Text style={styles.point}>
        { `Pontuação atualizada: ${newPoints} pontos` }
      </Text>
    </View>
  )
}
