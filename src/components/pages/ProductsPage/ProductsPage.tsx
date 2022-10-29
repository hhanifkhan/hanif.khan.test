import React, { useState, useEffect, useRef, useCallback } from "react";
import ProductList from "../../organisms/ProductList";
import Header from "../../molecules/Header";
import getProductData from "../../../services/getProductData";
import { IProduct } from "../../../interfaces/common";

export default function ProductsPage() {
  const isDataFetchedRef = useRef(false);
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!isDataFetchedRef.current) {
      getProductData()
        .then((data) => {
          setProductsData(data);
          setFilteredProducts(data);
        })
        .catch((e) => {
          console.log("API error case", e);
        });
      isDataFetchedRef.current = true;
    }
  }, []);

  const filterProductsBySize = useCallback(
    (selectedFilter: string) => {
      if (!selectedFilter) {
        setFilteredProducts(productsData);
      } else {
        const updatedProducts: any =
          productsData &&
          productsData.length &&
          productsData.filter((product: IProduct) =>
            product?.size?.includes(selectedFilter)
          );
        setFilteredProducts(updatedProducts);
      }
    },
    [productsData]
  );

  return (
    <main className="container mx-auto">
      <Header filterProductsBySize={filterProductsBySize} />
      {filteredProducts?.length && (
        <ProductList productsData={filteredProducts} />
      )}
    </main>
  );
}
