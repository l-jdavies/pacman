import { render, screen } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import CommandForm from "@/forms/CommandForm";

test("input field should be invalid unless command is entered", async () => {
  render(<CommandForm errorMessage={""} showSuccess={false} />);

  expect(getCommandInputField()).toBeInvalid();

  const inputCommand = "PLACE,1,2,WEST";
  await user.type(getCommandInputField(), inputCommand);

  expect(getCommandInputField()).toBeValid();
});

test("success message renders", async () => {
  render(<CommandForm errorMessage={""} showSuccess={true} />);
  const inputCommand = "PLACE,1,2,WEST";

  await user.type(getCommandInputField(), inputCommand);
  await clickSubmitButton();

  expect(getSuccessMessage()).toBeInTheDocument();
});

test("error message rendered when passed as prop", () => {
  const err = "Game must be started with the 'PLACE' command";

  render(<CommandForm errorMessage={err} showSuccess={false} />);

  expect(getErrorMessage()).toBeInTheDocument();
});

export function getCommandInputField() {
  return screen.getByTestId("command_input");
}

export async function clickSubmitButton() {
  await user.click(screen.getByRole("button", { name: /Submit/i }));
}

export function getSuccessMessage() {
  return screen.getByTestId("success_message");
}

export function getErrorMessage() {
  return screen.getByTestId("error_message");
}
