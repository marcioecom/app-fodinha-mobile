import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { PlayerPoints } from '../../components/PlayerPoints';
import { useMatch } from '../../hooks/useMatch';
import { styles } from './styles';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ModalView } from '../../components/ModalView';
import { ShowWinner } from '../../components/ShowWinner';
import { Button } from '../../components/Button';

export function Game() {
  const navigation = useNavigation();
  const { players, setPoints, winner, setWinner, deleteMatch, match } = useMatch();
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    setPoints(
      new Array(players.length).fill(5)
    );
  }, [])

  useEffect(() => {
    if (winner) {
      setShowWinner(true);
    }
  }, [winner])

  function goToHome() {
    if (!match) return;

    if (!winner) {
      deleteMatch(match.id)
    }
    setWinner(undefined);
    navigation.navigate("Home" as never)
  }

  function closeModal() {
    setWinner(undefined);
    setShowWinner(false);
    navigation.navigate("Home" as never)
  }

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      style={styles.keyboardView}
    >
      <Background>
        <ScrollView>
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
            { players && players.map((player, i) => (
                <PlayerPoints
                  key={player}
                  userId={player}
                  position={i}
                />
              ))}
          </View>
        </View>
        <View style={styles.btnGoHome}>
          <Button title="Ir para home" onPress={goToHome} />
        </View>
      </ScrollView>
      </Background>

      <ModalView visible={showWinner} closeModal={closeModal}>
        <ShowWinner />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
