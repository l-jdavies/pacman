"use client";
import { Position } from "@/types/position";
import { createContext, useContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

type GameContextType = {
  gameStarted: boolean;
  pacmanPosition: Position;
  setGameStarted: (gameStarted: boolean) => void;
  setPacmanPosition: (position: Position) => void;
};

const defaultValues: GameContextType = {
  gameStarted: false,
  pacmanPosition: { x: 0, y: 0, direction: "NORTH" },
  setGameStarted: () => {},
  setPacmanPosition: () => {},
};

const GameContext = createContext<GameContextType>(defaultValues);

export const useGameContext = () => {
  return useContext(GameContext);
};

export default function GameProvider({ children }: Props) {
  const [gameStarted, setGameStarted] = useState<boolean>(
    defaultValues.gameStarted
  );

  const [pacmanPosition, setPacmanPosition] = useState<Position>(
    defaultValues.pacmanPosition
  );

  const value = {
    gameStarted,
    pacmanPosition,
    setGameStarted,
    setPacmanPosition,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
