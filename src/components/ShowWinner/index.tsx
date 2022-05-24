import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { api } from '../../services/api';
import { styles } from './styles';
import { useMatch } from '../../hooks/useMatch';

type PlayerType = {
  id: string,
  name?: string,
  avatar: string | null,
  ranking: {
    points: number,
  }
}

export function ShowWinner() {
  const { winner, match } = useMatch();
  const [newPoints, setNewPoints] = useState();
  const [playerWinner, setPlayerWinner] = useState<PlayerType | null>();

  useEffect(() => {
    (async () => {
      const { data: playerWinnerData } = await api.get(`/users/info/${winner?.player}`);
      setPlayerWinner(playerWinnerData);

      api.put('/ranking', { userId: playerWinnerData?.id })
        .then((res) => setNewPoints(res.data.points))

      await api.put(`/matches/${match?.id}`, { winnerId: playerWinnerData.id })
    })();
  }, [winner]);

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
