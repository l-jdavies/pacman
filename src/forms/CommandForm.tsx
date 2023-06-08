import { useGameContext } from "@/context/GameContext";
import React, { FormEvent, useEffect, useState } from "react";

const CommandInput = ({
  errorMessage,
  showSuccess,
}: {
  errorMessage: string;
  showSuccess: boolean;
}) => {
  const [userInput, setUserInput] = useState<string>("");

  const { setPlayerCommand, playerCommand } = useGameContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const transformInput = userInput
      .replace(/\s+/g, "")
      .toUpperCase()
      .split(",");
    setPlayerCommand(transformInput);

    // @ts-ignore
    document.getElementById("command-form")?.reset();
  };

  return (
    <>
      <form
        id="command-form"
        data-testid="command-form"
        onSubmit={(e) => handleSubmit(e)}
        className="text-white"
      >
        <label htmlFor="game_command" className="pb-5">
          Enter a valid command below:
        </label>
        <div className="flex-wrap py-4">
          <input
            id="game_command"
            type="text"
            placeholder="PLACE,0,0,NORTH"
            className="p-1.5 mr-3 my-3 rounded focus:border-none focus:ring-blue-700 placeholder:pl-1 text-black"
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
      </form>

      {showSuccess && (
        <p className="text-[#0FFF50] flex flex-col">
          Successfully submitted command: {playerCommand}
        </p>
      )}
      {errorMessage && <p className="text-red-700 pt-2">{errorMessage}</p>}
    </>
  );
};

export default CommandInput;
