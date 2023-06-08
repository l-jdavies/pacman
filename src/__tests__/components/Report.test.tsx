import { render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import {
  clickSubmitButton,
  getCommandInputField,
} from "../forms/CommandForm.test";
import Report from "@/components/Report";
import CommandForm from "@/forms/CommandForm";

test("report renders", async () => {
  render(<CommandForm errorMessage={""} showSuccess={false} />);
  render(<Report />);

  // start game
  const inputCommand = "PLACE,1,2,WEST";
  await user.type(getCommandInputField(), inputCommand);
  await clickSubmitButton();

  //enter REPORT command
  const reportCommand = "REPORT";
  await user.type(getCommandInputField(), reportCommand);
  await clickSubmitButton();

  expect(getReport()).toBeInTheDocument();
});

export function getReport() {
  return screen.getByText("Position report:")
}