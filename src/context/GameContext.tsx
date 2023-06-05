"use client";

import { GameContextType } from "@/types/gameContext";
import { createContext, useContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const defaultValues: GameContextType = {
  gameStarted: false,
  xPosition: "0",
  yPosition: "0",
  direction: "NORTH",
  command: "",
  setGameStarted: () => {},
  setXPosition: () => {},
  setYPosition: () => {},
  setDirection: () => {},
  setCommand: () => {},
};

const GameContext = createContext<GameContextType>(defaultValues);

export const useGameContext = () => {
  return useContext(GameContext);
};

export default function GameProvider({ children }: Props) {
  const [gameStarted, setGameStarted] = useState<boolean>(
    defaultValues.gameStarted
  );

  const [xPosition, setXPosition] = useState<string>(defaultValues.xPosition);

  const [yPosition, setYPosition] = useState<string>(defaultValues.yPosition);

  const [direction, setDirection] = useState<string>(defaultValues.direction);

  const [command, setCommand] = useState<string>(defaultValues.command);

  const value = {
    gameStarted,
    xPosition,
    yPosition,
    direction,
    command,
    setGameStarted,
    setXPosition,
    setYPosition,
    setDirection,
    setCommand,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
