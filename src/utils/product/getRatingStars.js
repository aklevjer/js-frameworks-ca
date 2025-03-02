/**
 * Generates an array representing the rating stars (solid, half, empty).
 *
 * @param {number} rating - The rating value.
 * @returns {Array} An array of star types (`'solid'`, `'half'`, or `'empty'`).
 */
export function getRatingStars(rating) {
  const totalStars = 5;
  const solidStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < solidStars; i++) {
    stars.push("solid");
  }

  if (hasHalfStar) {
    stars.push("half");
  }

  const remainingStars = totalStars - stars.length;

  for (let i = 0; i < remainingStars; i++) {
    stars.push("empty");
  }

  return stars;
}
