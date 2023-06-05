export type GameContextType = {
  gameStarted: boolean;
  xPosition: string;
  yPosition: string;
  direction: string;
  command: string;
  setGameStarted: (gameStarted: boolean) => void;
  setXPosition: (xPosition: string) => void;
  setYPosition: (yPosition: string) => void;
  setDirection: (direction: string) => void;
  setCommand: (command: string) => void;
};