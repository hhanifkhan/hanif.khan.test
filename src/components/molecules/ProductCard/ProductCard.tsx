import React from "react";
import ProductTitle from "../../atoms/ProductTitle";
import Image from "../../atoms/Image";
import DealTag from "../../atoms/DealTag";
import ProductPrice from "../../atoms/ProductPrice";
import { IMAGE_PATH } from "../../../constants/global";
import { getDealType } from "../../../utils/common";

interface ProductCardProps {
  data: any;
}

export default function ProductCard({ data }: ProductCardProps) {
  const { isSale, isExclusive, price, productImage, productName } = data || {};
  const dealType = getDealType({ isSale, isExclusive });
  return (
    <li className="test px-3 py-10 outline-1 outline outline-grey-light w-full">
      <a>
        <article className="flex flex-col">
          <div className="flex mx-auto">
            <Image src={`${IMAGE_PATH}/${productImage}`} />
          </div>
          <div className=" min-h-48">
            {dealType && <DealTag type={dealType} />}
          </div>
          <div className="flex justify-between items-end pt-4">
            <ProductTitle className="mr-5">{productName}</ProductTitle>
            <ProductPrice amount={price} />
          </div>
        </article>
      </a>
    </li>
  );
}
