import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "../index";

test("Renders Image component", () => {
  const mockUrl = "/products/product.jpg";
  render(<Image src={mockUrl} />);
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", mockUrl);
});
