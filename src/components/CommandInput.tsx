import React, { FormEvent, KeyboardEvent, useState } from "react";

const CommandInput = ({
  setCommand,
}: {
  setCommand: (command: string) => void;
}) => {
  const [userInput, setUserInput] = useState<string>("");

  /**
   * handling the form submission manually, rather than using button type="submit" to prevent unnecessary re-renders
   */
  const handleSubmit = (
    e: FormEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setCommand(userInput);

    const form = (
      document.getElementById("command-form") as HTMLInputElement | null
    )
      // @ts-ignore
      ?.reset();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
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
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          type="button"
          className="border-white border-2 my-3 p-2 rounded focus:border-blue-700 hover:border-blue-700"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommandInput;
