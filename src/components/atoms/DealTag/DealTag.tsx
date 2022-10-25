import React from "react";
import { DEAL_TYPE } from "./../../../constants/global";
interface DealTagProps {
  type: string;
}

export default function DealTag({ type }: DealTagProps) {
  const generateDealInfo = (type: string) => {
    switch (type) {
      case DEAL_TYPE.SALE:
        return {
          style: "bg-red text-white",
          text: DEAL_TYPE.SALE,
        };
      case DEAL_TYPE.EXCLUSIVE:
        return {
          style: "bg-green text-white",
          text: DEAL_TYPE.EXCLUSIVE,
        };
      default:
        return {};
    }
  };
  const { text, style } = generateDealInfo(type);
  return (
    <div className="flex justify-start">
      {text && <span className={`px-8 py-4 text-base ${style}`}>{text}</span>}
    </div>
  );
}
