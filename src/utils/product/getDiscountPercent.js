export function getDiscountPercent(price, discountedPrice) {
  return Math.round(((price - discountedPrice) / price) * 100);
}
