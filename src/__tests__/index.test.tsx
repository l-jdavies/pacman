import "@testing-library/jest-dom";
import PacmanPage from "@/app/page";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";

describe("Pacman", () => {
  it("form is rendered", () => {
    render(<PacmanPage />);

    const form = screen.getByTestId("command-form");
    expect(form).toBeDefined();
  });
});
