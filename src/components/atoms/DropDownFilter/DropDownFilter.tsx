import React from "react";
import { useState, ChangeEvent } from "react";
import { IProductSizes } from "../../../interfaces/common";
interface DropDownFilterProps {
  productSizes: IProductSizes[];
  filterProductsBySize?: Function;
}

export default function DropDownFilter({
  productSizes,
  filterProductsBySize,
}: DropDownFilterProps) {
  const [value, setValue] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
    filterProductsBySize && filterProductsBySize(event.target.value);
  };

  if (!productSizes || !productSizes.length) return null;

  const generateOptionList = () => {
    return productSizes.map(({ key, value }: IProductSizes) => (
      <option value={value} key={key}>
        {value}
      </option>
    ));
  };

  return (
    <select
      value={value}
      onChange={handleOnChange}
      className="border border-grey p-3"
    >
      <option value="">Filter by size</option>
      {generateOptionList()}
    </select>
  );
}
