import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { PlayerPoints } from '../../components/PlayerPoints';
import { useMatch } from '../../hooks/useMatch';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Game() {
  const navigation = useNavigation();
  const { players } = useMatch();

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <RectButton onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" color={'white'} size={24} />
          </RectButton>

          <Text style={styles.title}>
            Partida Rolando
          </Text>
          <View />
        </View>

        <View style={styles.content}>
          { players && players.map((player) => {
            return (
              <PlayerPoints
                key={player}
                userId={player}
              />
            )
          })}
        </View>
      </View>
    </Background>
  )
}
