"use client";

import { useGameContext } from "@/context/GameContext";
import React, { useEffect, useState } from "react";
import {
  handleLeft,
  handleMove,
  handlePlace,
  handleReport,
  isStartGame,
  isValidCommand,
} from "@/game_commands";
import { VALID_COMMANDS } from "@/constants";
import CommandForm from "@/forms/CommandForm";
import Report from "@/components/Report";

const PacmanPage = () => {
  const { gameStarted, position, playerCommand, setGameStarted, setPosition } =
    useGameContext();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showReport, setShowReport] = useState<boolean>(false);

  useEffect(() => {
    // return if no command
    if (playerCommand[0].length < 1) return;

    // determine if user command is valid
    if (!isValidCommand(playerCommand[0])) {
      setErrorMessage(
        "Invalid command. Enter 'MOVE', 'PLACE', 'LEFT', 'RIGHT' or 'REPORT"
      );
      return;
    } else {
      setErrorMessage("");
    }

    // determine if game has already started or if user command is to start game
    const startGame = isStartGame(playerCommand[0]);

    if (startGame) {
      setGameStarted(true);
      setErrorMessage("");
    }

    if (!gameStarted && !startGame) {
      setErrorMessage("Game must be started with the 'PLACE' command");
      return;
    }

    // if user has entered valid command and game has started, handle user command
    switch (playerCommand[0]) {
      case VALID_COMMANDS.PLACE:
        handlePlace(playerCommand, setPosition);
        return;
      case VALID_COMMANDS.MOVE:
        handleMove(position, setPosition);
        return;
      case VALID_COMMANDS.LEFT:
        handleLeft(position, setPosition);
        return;
      case VALID_COMMANDS.RIGHT:
        handleLeft(position, setPosition);
        return;
      case VALID_COMMANDS.REPORT:
        handleReport(setShowReport);
        return;
    }
  }, [playerCommand]);

  return (
    <div>
      <CommandForm errorMessage={errorMessage} />
      {showReport && <Report />}
    </div>
  );
};

export default PacmanPage;
