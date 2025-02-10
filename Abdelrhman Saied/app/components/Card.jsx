import Link from "next/link";
import { MapPin, Star } from "lucide-react";

const Card = ({ img, country, text, time, price, more = true }) => {
  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={img} alt="Tour Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-orange-600 text-sm flex items-center gap-2`}>
            <MapPin className="w-4" />
            {country}
          </span>
          <span className="text-yellow-500 text-sm flex items-center">
            <Star className="w-4" />
            4.7
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-1">{text}</h2>
        <p className="text-sm text-gray-500 mb-3">{time}</p>
        <div className="flex justify-between items-center">
          {price && (
            <span className="text-orange-600 font-bold text-lg">{price}$</span>
          )}
          {more && (
            <Link
              href="/TourDestinations"
              className="text-gray-600 text-sm flex items-center hover:underline"
            >
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
