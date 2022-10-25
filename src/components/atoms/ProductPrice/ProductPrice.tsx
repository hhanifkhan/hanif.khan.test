import React from "react";

interface PriceProps {
  amount: string;
}

export default function ProductPrice({ amount }: PriceProps) {
  if (!amount) return null;
  return (
    <span className="text-xl lg:text-4xl text-grey-dark font-semibold">
      {amount}
    </span>
  );
}
