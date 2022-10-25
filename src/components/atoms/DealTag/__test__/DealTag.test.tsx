import React from "react";
import { render, screen } from "@testing-library/react";
import DealTag from "./../index";
import { DEAL_TYPE } from "./../../../../constants/global";

test("Renders DealTag component", () => {
  let element;
  const { rerender } = render(<DealTag type={DEAL_TYPE.SALE} />);
  element = screen.getByText(DEAL_TYPE.SALE);
  expect(element).toBeInTheDocument();
  //   console.log(prettyDOM(element));

  //   rerender(<DealTag type={DEAL_TYPE.EXCLUSIVE} />);
  //   element = screen.getByText(DEAL_TYPE.EXCLUSIVE);
  //   expect(element).toBeInTheDocument();
});
