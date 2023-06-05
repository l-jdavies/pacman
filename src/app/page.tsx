"use client";

import CommandInput from "@/components/CommandInput";
import { useGameContext } from "@/context/GameContext";
import React, { useEffect } from "react";

const PacmanPage = () => {
  const {
    gameStarted,
    xPosition,
    yPosition,
    direction,
    command,
    setGameStarted,
    setXPosition,
    setYPosition,
    setDirection,
    setCommand,
  } = useGameContext();

  return (
    <>
      <CommandInput setCommand={setCommand}/>
      <p className="text-white">Current command: {command}</p>
    </>
  );
};

export default PacmanPage;
