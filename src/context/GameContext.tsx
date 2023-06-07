"use client";

import { ORIGIN_POSITION } from "@/constants";
import { GameContextType } from "@/types/gameContext";
import { Position } from "@/types/position";
import { createContext, useContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const defaultValues: GameContextType = {
  gameStarted: false,
  position: ORIGIN_POSITION,
  playerCommand: [""],
  setGameStarted: () => {},
  setPosition: () => {},
  setPlayerCommand: () => {},
};

const GameContext = createContext<GameContextType>(defaultValues);

export const useGameContext = () => {
  return useContext(GameContext);
};

export default function GameProvider({ children }: Props) {
  const [gameStarted, setGameStarted] = useState<boolean>(
    defaultValues.gameStarted
  );

  const [position, setPosition] = useState<Position>(defaultValues.position)

  const [playerCommand, setPlayerCommand] = useState<string[]>(defaultValues.playerCommand);

  const value = {
    gameStarted,
    position,
    playerCommand,
    setGameStarted,
    setPosition,
    setPlayerCommand,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
