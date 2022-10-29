export interface IProductSizes {
  key: string;
  value: string;
}

export interface IGetDealType {
  isSale?: boolean;
  isExclusive?: boolean;
}

export interface IProduct {
  index?: number;
  isSale?: boolean;
  isExclusive?: boolean;
  price?: string;
  productImage?: string;
  productName?: string;
  size?: string[];
}
