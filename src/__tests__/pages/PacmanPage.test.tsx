import { ORIGIN_POSITION } from "@/constants";
import {
  handleLeft,
  handleMove,
  handlePlace,
  handleRight,
  isStartGame,
  isValidCommand,
  isValidPlaceCommand,
} from "@/game_commands";
import { Position } from "@/types/position";

test("isValid command returns correct boolean", () => {
  const validCommand = "MOVE";
  const invalidCommand = "INVALID";

  expect(isValidCommand(validCommand)).toBeTruthy();
  expect(isValidCommand(invalidCommand)).toBeFalsy();
});

test("isStartGame return true if param is 'PLACE'", () => {
  const placeCommand = "PLACE";
  const moveCommand = "MOVE";

  expect(isStartGame(placeCommand)).toBeTruthy();
  expect(isStartGame(moveCommand)).toBeFalsy();
});

test("handlePlace takes string arr parameter and updates position state", () => {
  const mockSetState = jest.fn();
  const placeCommand = ["PLACE", "0", "0", "NORTH"];
  const expectedPositionState = ORIGIN_POSITION;

  handlePlace(placeCommand, mockSetState);
  expect(mockSetState).toHaveBeenCalledWith(expectedPositionState);
});

test("handlePlace updates state to ORIGIN_POSITION if provided with incomplete/invalid PLACE command", () => {
  const mockSetPositionState = jest.fn();
  const incompletePlace = ["PLACE"];
  const invalidPlace = ["PLACE", "0", "6", "HELLO"];
  const expectedPositionState = ORIGIN_POSITION;

  handlePlace(incompletePlace, mockSetPositionState);
  expect(mockSetPositionState).toHaveBeenCalledWith(expectedPositionState);

  handlePlace(invalidPlace, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(expectedPositionState);
});

test("isValidPlaceCommand returns false if x and/or y are greater than grid size", () => {
  const placeCommand = ["PLACE", "6", "9", "NORTH"];

  expect(isValidPlaceCommand(placeCommand)).toBeFalsy();
});

test("isValidPlaceCommand returns false if f is invalid", () => {
  const placeCommand = ["PLACE", "0", "0", "MOVE"];

  expect(isValidPlaceCommand(placeCommand)).toBeFalsy();
});

test("isValidPlaceCommand returns true when command is valid", () => {
  const placeCommand = ["PLACE", "0", "0", "EAST"];

  expect(isValidPlaceCommand(placeCommand)).toBeTruthy();
});

test("handleMove will increment y position by 1 if f is north and y < max grid size", () => {
  const mockSetPositionState = jest.fn();
  const mockPosition: Position = { x: 2, y: 1, f: "NORTH" };
  const expectedPosition: Position = { x: 2, y: 2, f: "NORTH" };

  handleMove(mockPosition, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(expectedPosition);
});

test("handleMove will decrement y position by 1 if f is south and y > min grid size", () => {
  const mockSetPositionState = jest.fn();
  const mockPosition: Position = { x: 2, y: 1, f: "SOUTH" };
  const expectedPosition: Position = { x: 2, y: 0, f: "SOUTH" };

  handleMove(mockPosition, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(expectedPosition);
});

test("handleMove will increment x position by 1 if f is east and x < max grid size", () => {
  const mockSetPositionState = jest.fn();
  const mockPosition: Position = { x: 2, y: 1, f: "EAST" };
  const expectedPosition: Position = { x: 3, y: 1, f: "EAST" };

  handleMove(mockPosition, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(expectedPosition);
});

test("handleMove will decrement x position by 1 if f is west and x > min grid size", () => {
  const mockSetPositionState = jest.fn();
  const mockPosition: Position = { x: 2, y: 1, f: "WEST" };
  const expectedPosition: Position = { x: 1, y: 1, f: "WEST" };

  handleMove(mockPosition, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(expectedPosition);
});

test("handleMove will not update state if x or y equal grid size", () => {
  const mockSetPositionState = jest.fn();
  const mockPositionY: Position = { x: 2, y: 4, f: "NORTH" };
  const mockPositionX: Position = { x: 4, y: 2, f: "EAST" };

  handleMove(mockPositionY, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledTimes(0);

  handleMove(mockPositionX, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledTimes(0);
});

test("handleLeft will rotate position.f 90 degrees to the left", () => {
  const mockSetPositionState = jest.fn();
  const mockPositionN: Position = { x: 2, y: 1, f: "NORTH" };
  const mockPositionS: Position = { x: 2, y: 1, f: "SOUTH" };
  const mockPositionE: Position = { x: 2, y: 1, f: "EAST" };
  const mockPositionW: Position = { x: 2, y: 1, f: "WEST" };

  handleLeft(mockPositionN, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionW);

  handleLeft(mockPositionS, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionE);

  handleLeft(mockPositionE, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionN);

  handleLeft(mockPositionW, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionS);
});

test("handleRight will rotate position.f 90 degrees to the right", () => {
  const mockSetPositionState = jest.fn();
  const mockPositionN: Position = { x: 2, y: 1, f: "NORTH" };
  const mockPositionS: Position = { x: 2, y: 1, f: "SOUTH" };
  const mockPositionE: Position = { x: 2, y: 1, f: "EAST" };
  const mockPositionW: Position = { x: 2, y: 1, f: "WEST" };

  handleRight(mockPositionN, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionE);

  handleRight(mockPositionS, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionW);

  handleRight(mockPositionE, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionS);

  handleRight(mockPositionW, mockSetPositionState);
  expect(mockSetPositionState).toBeCalledWith(mockPositionN);
});
