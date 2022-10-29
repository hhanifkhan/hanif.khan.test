import React from "react";
import { render, screen } from "@testing-library/react";
import DealTag from "./../index";
import { DEAL_TYPE } from "./../../../../constants/global";

test("Renders DealTag component", () => {
  render(<DealTag type={DEAL_TYPE.SALE} />);
  const element = screen.getByText(DEAL_TYPE.SALE);
  expect(element).toBeInTheDocument();
});
