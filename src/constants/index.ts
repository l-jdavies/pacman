import { Position } from "@/types/position";

export const VALID_COMMANDS = {
  PLACE: "PLACE",
  MOVE: "MOVE",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  REPORT: "REPORT",
};

export const FACE_DIRECTIONS = {
  NORTH: "NORTH",
  SOUTH: "SOUTH",
  EAST: "EAST",
  WEST: "WEST",
};

export const MAX_GRID_POSITION = 4;
export const MIN_GRID_POSITION = 0;

export const ORIGIN_POSITION: Position = {
  x: 0,
  y: 0,
  f: FACE_DIRECTIONS.NORTH,
};
