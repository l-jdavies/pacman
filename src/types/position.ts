import { FACE_DIRECTIONS } from "@/constants"

export type Position = {
  x: number
  y: number
  f: typeof FACE_DIRECTIONS.NORTH | typeof FACE_DIRECTIONS.SOUTH | typeof FACE_DIRECTIONS.EAST | typeof FACE_DIRECTIONS.WEST
}