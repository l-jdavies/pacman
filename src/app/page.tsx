"use client";

import { useGameContext } from "@/context/GameContext";
import React, { useEffect, useState } from "react";
import {
  handleLeft,
  handleMove,
  handlePlace,
  handleReport,
  handleRight,
  isStartGame,
  isValidCommand,
} from "@/game_commands";
import { VALID_COMMANDS } from "@/constants";
import CommandForm from "@/forms/CommandForm";
import Report from "@/components/Report";
import GhostIcon from "@/components/GhostIcon";

const PacmanPage = () => {
  const { gameStarted, position, playerCommand, setGameStarted, setPosition } =
    useGameContext();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);

  useEffect(() => {
    // return if no command
    if (playerCommand[0].length < 1) return;

    // determine if user command is valid
    if (!isValidCommand(playerCommand[0])) {
      setErrorMessage(
        "Invalid command. Enter 'MOVE', 'PLACE', 'LEFT', 'RIGHT' or 'REPORT"
      );
      setShowSuccess(false);
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
      setShowSuccess(false);
      return;
    }

    // if user has entered valid command and game has started, handle user command
    switch (playerCommand[0]) {
      case VALID_COMMANDS.PLACE:
        handlePlace(playerCommand, setPosition);
        setShowSuccess(true);
        return;
      case VALID_COMMANDS.MOVE:
        handleMove(position, setPosition);
        setShowSuccess(true);
        return;
      case VALID_COMMANDS.LEFT:
        handleLeft(position, setPosition);
        setShowSuccess(true);
        return;
      case VALID_COMMANDS.RIGHT:
        handleRight(position, setPosition);
        setShowSuccess(true);
        return;
      case VALID_COMMANDS.REPORT:
        handleReport(setShowReport);
        setShowSuccess(true);
        return;
    }

  }, [playerCommand]);

  return (
    <>
      <div className="flex flex-col items-center px-2">
        <GhostIcon />
        <CommandForm errorMessage={errorMessage} showSuccess={showSuccess} />
        {showReport && <Report />}
      </div>
    </>
  );
};

export default PacmanPage;
