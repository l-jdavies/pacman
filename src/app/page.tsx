"use client";

import CommandInput from "@/forms/CommandForm";
import { useGameContext } from "@/context/GameContext";
import React, { useEffect } from "react";

const PacmanPage = () => {
  const {
    gameStarted,
    position,
    playerCommand,
    setGameStarted,
    setPosition,
    setPlayerCommand,
  } = useGameContext();

  useEffect(() => {
    position.x += 1
    console.log(position)
  })

  return (
    <>
      <CommandInput setPlayerCommand={setPlayerCommand} />
      <p className="text-white">x position {position.x}</p>
    </>
  );
};

export default PacmanPage;
