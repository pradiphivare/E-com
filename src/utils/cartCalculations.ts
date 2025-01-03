export const calculateItemTotal = (price: number, quantity: number): number => {
  return Number((price * quantity).toFixed(2));
};

export const calculateCartTotal = (items: Array<{ price: number; quantity: number }>): number => {
  return Number(items.reduce((sum, item) => sum + calculateItemTotal(item.price, item.quantity), 0).toFixed(2));
};

export const validateQuantity = (quantity: number): boolean => {
  return Number.isInteger(quantity) && quantity > 0 && quantity <= 99;
};