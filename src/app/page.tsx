"use client";

import { useGameContext } from "@/context/GameContext";
import React, { useEffect } from "react";

const Pacman = () => {
  const { gameStarted, pacmanPosition, setGameStarted, setPacmanPosition } =
    useGameContext();

  useEffect(() => {
    setGameStarted(true);
    setPacmanPosition({ x: 1, y: 4, direction: "NORTH" });
    console.log(gameStarted, pacmanPosition)
  }, []);
  
  return (
    <div>game started: {`${pacmanPosition.x}`}</div>
  );
};

export default Pacman;
