import React from "react";

const CommandInput = () => {
  return (
    <form className="text-white text-center">
      <label htmlFor="game_command" className="">
        Enter a valid command below:
      </label>
      <div className="flex flex-wrap justify-center">
        <input
          id="game_command"
          type="text"
          placeholder="PLACE 0,0,NORTH"
          className="p-1.5 mr-2 my-3 rounded focus:border-none focus:ring-blue-700 placeholder:pl-1"
        />
        <button type="submit" className="border-white border-2 my-3 p-2 rounded focus:border-blue-700 hover:border-blue-700">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommandInput;
