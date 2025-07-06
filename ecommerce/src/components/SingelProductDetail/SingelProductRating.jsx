import { TiStarFullOutline } from "react-icons/ti";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const SingleProductRating = ({ rating }) => {
  const FullRating = Math.floor(rating) || 0;
  const HalfRating = rating % 1 >= 0.5;
  const EmptyRating = 5 - FullRating - (HalfRating ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(FullRating)].map(() => (
        <TiStarFullOutline size={20} color="#FFAD33" />
      ))}
      {HalfRating && <FaRegStarHalfStroke size={20} color="#FFAD33" />}
      {[...Array(EmptyRating)].map(() => (
        <FaRegStar size={20} color="#EFEFEF" />
      ))}
    </div>
  );
};

export default SingleProductRating;