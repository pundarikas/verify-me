import {  render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Verification } from "../verification";
describe("<Verification />", () => {
  test("renders verification", () => {
    render(
      <BrowserRouter>
        <Verification />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Verify me !!");

    expect(linkElement).toBeInTheDocument();
  });

  test("submit button should be disabled ", () => {
    render(
      <BrowserRouter>
        <Verification />
      </BrowserRouter>
    );
    expect(screen.getByText("Submit")).toBeDisabled();
  });

  test("test validation message ", async () => {
    const { container } = render(
      <BrowserRouter>
        <Verification />
      </BrowserRouter>
    );

    const firstInput = container.querySelector('[data-id = "0"]');
    await act(async () => {
      firstInput && userEvent.type(firstInput, "1");
    });
    expect(screen.getByText("Must be exactly 6 digits")).toBeInTheDocument();

    expect(firstInput).toHaveValue(1);
  });

  test("test validation message ", async () => {
    const { container } = render(
      <BrowserRouter>
        <Verification />
      </BrowserRouter>
    );
    const firstInput = container.querySelector('[data-id = "0"]');
    await act(async () => {
      firstInput && userEvent.type(firstInput, "1");
    });
    expect(screen.getByText("Must be exactly 6 digits")).toBeInTheDocument();

    expect(firstInput).toHaveValue(1);
  });
});
