"use client";

import CommandInput from "@/forms/CommandForm";
import { useGameContext } from "@/context/GameContext";
import React, { useEffect, useState } from "react";
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

  function isValidCommand() {
    return Object.values(VALID_COMMANDS).includes(playerCommand[0]);
  }

  function isStartGame() {
    return playerCommand[0] === VALID_COMMANDS.PLACE;
  }

  useEffect(() => {
    if (!playerCommand) return;

    // determine if user command is valid
    !isValidCommand()
      ? setErrorMessage(
          "Invalid command. Enter 'MOVE', 'PLACE', 'LEFT', 'RIGHT' or 'REPORT"
        )
      : setErrorMessage("");

    // determine if game has already started or command is to start game
    (!gameStarted && !isStartGame()) ? setErrorMessage("Game must be started with the 'PLACE' command") : setErrorMessage("");
  }, [playerCommand]);

  return (
    <div>
      <CommandInput errorMessage={errorMessage} />

      <p className="text-white">x position {playerCommand}</p>
    </div>
  );
};

export default PacmanPage;
