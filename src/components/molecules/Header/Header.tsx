import React from "react";
import Heading from "../../atoms/Heading";
import DropDownFilter from "../../atoms/DropDownFilter";
import { TITLE, PRODUCT_SIZES } from "./../../../constants/global";

interface HeaderProps {
  filterProductsBySize: Function;
}

export default function Header({ filterProductsBySize }: HeaderProps) {
  return (
    <header className="flex justify-between bg-light-blue py-3 px-pad-10 mb-3 mt-11 items-center">
      <Heading>{TITLE}</Heading>
      <DropDownFilter
        productSizes={PRODUCT_SIZES}
        filterProductsBySize={filterProductsBySize}
      />
    </header>
  );
}
