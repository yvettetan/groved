export const formatCurrency = (price: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(price);
};
