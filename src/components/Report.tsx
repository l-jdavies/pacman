import { useGameContext } from "@/context/GameContext";
import React from "react";

const Report = () => {
  const { position } = useGameContext();

  return (
    <div className="text-gray-500 flex justify-center pt-5">
      <div className="">
        <p>Position report:</p>
        <p>X: {position.x}</p>
        <p>Y: {position.y}</p>
        <p>F: {position.f}</p>
      </div>
    </div>
  );
};

export default Report;
