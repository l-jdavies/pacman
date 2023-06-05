"use client";

import CommandInput from "@/components/CommandInput";
import { useGameContext } from "@/context/GameContext";
import React, { useEffect } from "react";

const PacmanPage = () => {
  const { gameStarted, pacmanPosition, setGameStarted, setPacmanPosition } =
    useGameContext();

  useEffect(() => {
    setGameStarted(true);
    setPacmanPosition({ x: 1, y: 4, direction: "NORTH" });
    console.log(gameStarted, pacmanPosition);
  }, []);

  return (
    <>
      <CommandInput />
    </>
  );
};

export default PacmanPage;
