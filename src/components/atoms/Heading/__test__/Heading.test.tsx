import React from "react";
import { render } from "@testing-library/react";
import Heading from "../index";

test("Renders Heading component", () => {
  const mockText = "Women wear";
  const { getByText } = render(<Heading>{mockText}</Heading>);
  expect(getByText(mockText)).toBeInTheDocument();
});
