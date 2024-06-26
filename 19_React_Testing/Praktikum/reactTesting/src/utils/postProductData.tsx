type ProductData = {
  id: number;
  productName: string;
  productCategory: string;
  productFreshness: string;
  productImage: string | null;
  additionalDescription: string;
  randomNumber: number;
};

export async function postProductData(data: ProductData) {
  const res = await fetch("https://650c816247af3fd22f67b58e.mockapi.io/ProductData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed posting data");
  }
  return res.json();
}
