import {
  FACE_DIRECTIONS,
  MAX_GRID_POSITION,
  MIN_GRID_POSITION,
  ORIGIN_POSITION,
  VALID_COMMANDS,
} from "@/constants";
import { Position } from "@/types/position";

export function isValidCommand(command: string) {
  return Object.values(VALID_COMMANDS).includes(command);
}

export function isStartGame(command: string) {
  return command === VALID_COMMANDS.PLACE;
}

export function handlePlace(
  command: string[],
  setPosition: (p: Position) => void
) {
  // determine if valid x,y,f provided (all three must be valid) - if not update position to origin
  if (!isValidPlaceCommand(command)) {
    setPosition(ORIGIN_POSITION);
    return;
  }

  const xNumber = Number(command[1]);
  const yNumber = Number(command[2]);

  setPosition({ x: xNumber, y: yNumber, f: command[3] });
}

function isValidPlaceCommand(command: string[]) {
  if (command.length !== 4) return false;

  const xNumber = Number(command[1]);
  const yNumber = Number(command[2]);

  if (xNumber < MIN_GRID_POSITION || xNumber > MAX_GRID_POSITION) return false;
  if (yNumber < MIN_GRID_POSITION || yNumber > MAX_GRID_POSITION) return false;

  if (!Object.values(FACE_DIRECTIONS).includes(command[3])) return false;

  return true;
}

// if move command will result in pacman moving off the board, command will be ignored
export function handleMove(
  position: Position,
  setPosition: (p: Position) => void
) {
  switch (position.f) {
    case FACE_DIRECTIONS.NORTH:
      if (position.y < MAX_GRID_POSITION)
        setPosition({ ...position, y: (position.y += 1) });
      return;
    case FACE_DIRECTIONS.SOUTH:
      if (position.y > MIN_GRID_POSITION)
        setPosition({ ...position, y: (position.y -= 1) });
      return;
    case FACE_DIRECTIONS.EAST:
      if (position.x < MAX_GRID_POSITION)
        setPosition({ ...position, x: (position.x += 1) });
      return;
    case FACE_DIRECTIONS.WEST:
      if (position.x > MIN_GRID_POSITION)
        setPosition({ ...position, x: (position.x -= 1) });
      return;
  }
}
