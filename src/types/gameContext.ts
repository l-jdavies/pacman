import { Position } from "./position";

export type GameContextType = {
  gameStarted: boolean;
  position: Position
  playerCommand: string[];
  setGameStarted: (gameStarted: boolean) => void;
  setPosition: (position: Position) => void;
  setPlayerCommand: (command: string[]) => void;
};