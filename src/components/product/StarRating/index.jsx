import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import { getRatingStars } from "../../../utils/product/getRatingStars";

export default function StarRating({ rating }) {
  const stars = getRatingStars(rating);

  return (
    <div className="flex items-center gap-2">
      <ul className="flex gap-2">
        {stars.map((starType, index) => (
          <li key={index}>
            {starType === "solid" && <BiSolidStar className="text-yellow-600" />}
            {starType === "half" && <BiSolidStarHalf className="text-yellow-600" />}
            {starType === "empty" && <BiStar className="text-neutral-600" />}
          </li>
        ))}
      </ul>
      <span className="text-m font-medium text-neutral-600">
        ({rating === 0 ? rating : rating.toFixed(1)})
      </span>
    </div>
  );
}
