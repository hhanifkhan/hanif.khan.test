import React from "react";
import ProductCard from "../../molecules/ProductCard";
import { IProduct } from "../../../interfaces/common";

interface ProductListProps {
  productsData: IProduct[];
}

export default function ProductList({ productsData }: ProductListProps) {
  return (
    <ul className="grid grid-cols-1 gap-px sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productsData &&
        productsData.length &&
        productsData.map((product: IProduct) => {
          return <ProductCard data={product} key={product?.index} />;
        })}
    </ul>
  );
}
