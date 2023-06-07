"use client";

import CommandInput from "@/forms/CommandForm";
import { useGameContext } from "@/context/GameContext";
import React, { useEffect, useState } from "react";
import { VALID_COMMANDS } from "@/constants";
import { isStartGame, isValidCommand } from "@/game_commands";

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
    if (!playerCommand) return;

    // determine if user command is valid
    !isValidCommand(playerCommand[0])
      ? setErrorMessage(
          "Invalid command. Enter 'MOVE', 'PLACE', 'LEFT', 'RIGHT' or 'REPORT"
        )
      : setErrorMessage("");

    // determine if game has already started or if user command is to start game
    const startGame = isStartGame(playerCommand[0]);
    if (!gameStarted && !startGame) {
      setErrorMessage("Game must be started with the 'PLACE' command");
    } else if (startGame) {
      setGameStarted(true);
      setErrorMessage("");
    } else {
      setErrorMessage("");
    }
  }, [playerCommand]);

  return (
    <div>
      <CommandInput errorMessage={errorMessage} />

      <p className="text-white">x position {playerCommand}</p>
    </div>
  );
};

export default PacmanPage;
