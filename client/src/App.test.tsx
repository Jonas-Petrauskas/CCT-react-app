import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should render Hearder", () => {
  render(<App />);
  const Header = screen.getByTestId("header");
  expect(Header).toBeInTheDocument();
});

test("Should render ListItem Component", () => {
  render(<App />);
  const Content = screen.getByTestId("content");
  expect(Content).toBeInTheDocument();
});
