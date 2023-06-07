import { VALID_COMMANDS } from "@/constants";



export function isValidCommand(command: string) {
  return Object.values(VALID_COMMANDS).includes(command);
}

export function isStartGame(command: string) {
  return command === VALID_COMMANDS.PLACE
}