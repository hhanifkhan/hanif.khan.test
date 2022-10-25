import { DEAL_TYPE } from "./../constants/global";
import { IGetDealType } from "../interfaces/common";

export const getDealType = ({ isSale, isExclusive }: IGetDealType) => {
  if (isSale) return DEAL_TYPE.SALE;
  else if (isExclusive) return DEAL_TYPE.EXCLUSIVE;
};
