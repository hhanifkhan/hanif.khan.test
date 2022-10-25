import { FETCH_PRODUCTS_ERROR } from "../constants/global";

export default async function getProductsData() {
  try {
    const response = await fetch("/mockData/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (e: any) {
    throw new Error(FETCH_PRODUCTS_ERROR);
  }
}
