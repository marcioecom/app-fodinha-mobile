import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { api } from '../../services/api';
import { PodiumPosition } from '../PodiumPosition';
import { styles } from './styles';

type PositionType = {
  id: string,
  user: {
    avatar: string,
    name: string,
  }
}

export function Podium() {
  const [positions, setPositions] = useState<PositionType[]>([]);

  useEffect(() => {
    (async () => {
      api.get('/ranking/podium')
        .then(res => setPositions(res.data))
        .catch(err => console.log(err));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pódio
      </Text>

      <View style={styles.podium}>
        { positions && positions.map((position, i) => (
          <PodiumPosition
            key={position.id}
            position={i}
            urlImage={position.user.avatar}
            username={position.user.name}
          />
        ))}
      </View>
    </View>
  )
}
