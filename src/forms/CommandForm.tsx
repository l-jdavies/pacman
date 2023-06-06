import React, { FormEvent, KeyboardEvent, useState } from "react";

const CommandInput = ({
  setPlayerCommand,
}: {
  setPlayerCommand: (command: string) => void;
}) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPlayerCommand(userInput);
  };

  return (
    <form className="text-white text-center" id="command-form">
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
        />
        <button
          type="submit"
          className="border-white border-2 my-3 p-2 rounded focus:border-blue-700 hover:border-blue-700"
          onSubmit={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommandInput;
