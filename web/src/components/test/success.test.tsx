import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Success } from "../success";

describe("<Success />", () => {
  test("renders success", () => {
    render(
      <BrowserRouter>
        <Success />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Verification Successful !!");

    expect(linkElement).toBeInTheDocument();
  });
});
