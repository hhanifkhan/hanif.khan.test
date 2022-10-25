import React from "react";
import ProductCard from "../../molecules/ProductCard";

interface ProductListProps {
  productsData: any;
}

export default function ProductList({ productsData }: ProductListProps) {
  return (
    <ul className="grid grid-cols-1 gap-px sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productsData &&
        productsData.length &&
        productsData.map((product: any) => {
          return <ProductCard data={product} key={product?.index} />;
        })}
    </ul>
  );
}
