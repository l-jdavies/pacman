"use client";

import CommandInput from "@/forms/CommandForm";
import { useGameContext } from "@/context/GameContext";
import React, { useEffect, useState } from "react";
import {
  handleMove,
  handlePlace,
  isStartGame,
  isValidCommand,
} from "@/game_commands";
import { VALID_COMMANDS } from "@/constants";

const PacmanPage = () => {
  const {
    gameStarted,
    position,
    playerCommand,
    setGameStarted,
    setPosition,
    setPlayerCommand,
  } = useGameContext();

  const [errorMessage, setErrorMessage] = useState<string>("");

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
    }
  }, [playerCommand]);

  return (
    <div>
      <CommandInput errorMessage={errorMessage} />

      <p className="text-white">
        x position {position.x} , {position.y}, {position.f}
      </p>
    </div>
  );
};

export default PacmanPage;
