import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type MatchProviderProps = {
  children: ReactNode,
}

type WinnerType = {
  player: string;
  poinsts: number;
  eliminated: boolean;
}

type MatchContextType = {
  players: string[],
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>,
  createMatch: (playersIds: string[]) => void,
  points: number[],
  setPoints: React.Dispatch<React.SetStateAction<number[]>>,
  handlePlus: (position: number) => void,
  handleMinus: (position: number) => void,
  winner: WinnerType | undefined,
}

const MatchContext = createContext({} as MatchContextType);

function MatchProvider({ children }: MatchProviderProps) {
  const [players, setPlayers] = useState<string[]>([]);
  const [points, setPoints] = useState<number[]>([]);
  const [winner, setWinner] = useState<WinnerType | undefined>()

  useEffect(() => {
    if (points.length === 0) return;

    const playerPoints = players.map((player, i) => ({
      player,
      poinsts: points[i],
      eliminated: false,
    }))

    const eliminatedPlayers = playerPoints.map((playerPoint) => {
      if (playerPoint.poinsts === 0) {
        return playerPoint.eliminated = true;
      }
      return false;
    })

    const hasOneWinner = eliminatedPlayers.filter((elimPlayer) => elimPlayer === false).length

    if (hasOneWinner === 1) {
      const winner = playerPoints.find((winnerPlayer) => winnerPlayer.eliminated === false);
      setWinner(winner)
    }
  }, [points])

  async function createMatch(playersIds: string[]) {
    setPlayers([...playersIds]);

    try {
      await api.post("/matches", { players: playersIds });

    } catch (error: any) {
      console.log(error.message);
      throw new Error(error);
    }
  }

  function handleMinus(position: number) {
    if (points[position] === 0) return;
    const updatedPoints = points
      .map((point, index) => (index === position ? point - 1 : point));

    setPoints(updatedPoints);
  }

  function handlePlus(position: number) {
    if (points[position] === 5) return;
    const updatedPoints = points
      .map((point, index) => (index === position ? point + 1 : point));

    setPoints(updatedPoints);
  }

  const context = {
    players, setPlayers, createMatch, points, setPoints, handlePlus, handleMinus, winner
  };

  return (
    <MatchContext.Provider value={context}>
      { children }
    </MatchContext.Provider>
  )
}

export { MatchContext, MatchProvider }
