import React, { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

type MatchProviderProps = {
  children: ReactNode,
}

type MatchContextType = {
  players: string[],
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>,
  createMatch: (playersIds: string[]) => void,
}

const MatchContext = createContext({} as MatchContextType);

function MatchProvider({ children }: MatchProviderProps) {
  const [players, setPlayers] = useState<string[]>([]);

  async function createMatch(playersIds: string[]) {
    setPlayers(playersIds);

    try {
      await api.post("/matches", { players: playersIds });

      // console.log(res.data);
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error);
    }
  }

  const context = {
    players, setPlayers, createMatch
  };

  return (
    <MatchContext.Provider value={context}>
      { children }
    </MatchContext.Provider>
  )
}

export { MatchContext, MatchProvider }
