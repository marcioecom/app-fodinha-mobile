import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { RankingPlayer } from '../../components/RankingPlayer';
import { api } from '../../services/api';
import { styles } from './styles';

export function Ranking() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    (async () => {
      api.get("/ranking")
        .then((res) => setRanking(res.data))
        .catch(err => console.log(err));
    })();
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>
          Ranking
        </Text>

        <View style={styles.tableHead}>
          <Text style={styles.column}>
            Posição
          </Text>
          <Text style={styles.column}>
            Nome
          </Text>
          <Text style={styles.column}>
            Pontos
          </Text>
          <Text style={styles.column}>
            Última Vitória
          </Text>
        </View>

        <View style={styles.table}>
          <FlatList
            data={ranking}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <RankingPlayer player={item} />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            ListHeaderComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 100 }}
            style={styles.ranking}
          />
        </View>
      </View>
    </Background>
  )
}
