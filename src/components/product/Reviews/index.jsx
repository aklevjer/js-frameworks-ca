import StarRating from "../StarRating";

/**
 * Displays a list of reviews for a product.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object[]} props.reviews - An array of review objects.
 *
 * @returns {JSX.Element} The rendered reviews component.
 */
export default function Reviews({ reviews }) {
  if (!reviews.length) {
    return <p className="mt-4">No reviews yet.</p>;
  }

  return (
    <ul className="divide-y divide-neutral-200">
      {reviews.map(({ id, username, rating, description }) => (
        <li key={id} className="space-y-2 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="font-bold">{username}</h3>
            <StarRating rating={rating} />
          </div>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
