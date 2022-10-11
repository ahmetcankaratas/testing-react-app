import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // # 1 - Arrange
    render(<Greeting />);

    // # 2 - Act
    // ... nothing

    // Assert
    const element = screen.getByText("Hello World!", { exact: true });
    expect(element).toBeInTheDocument();
  });
});
