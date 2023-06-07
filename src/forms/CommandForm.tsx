import { useGameContext } from "@/context/GameContext";
import React, { FormEvent, useEffect, useState } from "react";

const CommandInput = ({ errorMessage }: { errorMessage: string }) => {
  const [userInput, setUserInput] = useState<string>("");

  const { setPlayerCommand } = useGameContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const transformInput = userInput.replace(/\s+/g, '').toUpperCase().split(",");
    setPlayerCommand(transformInput);

    // @ts-ignore
    document.getElementById("command-form")?.reset();
  };

  return (
    <form
      className="text-white text-center"
      id="command-form"
      data-testid="command-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="game_command" className="">
        Enter a valid command below:
      </label>
      <div className="flex flex-wrap justify-center">
        <input
          id="game_command"
          type="text"
          placeholder="PLACE 0,0,NORTH"
          className="p-1.5 mr-2 my-3 rounded focus:border-none focus:ring-blue-700 placeholder:pl-1 text-black"
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
        <button
          type="submit"
          className="border-white border-2 my-3 p-2 rounded focus:border-blue-700 hover:border-blue-700"
        >
          Submit
        </button>
      </div>
      {errorMessage && <p className="text-red-700 pt-2">{errorMessage}</p>}
    </form>
  );
};

export default CommandInput;
