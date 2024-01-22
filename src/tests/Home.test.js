import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders name in Home page", () => {
  render(<Home />);
  const text = screen.getByText(/Bond Trinh./i);
  expect(text).toBeInTheDocument();
});
