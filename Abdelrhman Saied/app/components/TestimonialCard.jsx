import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, avatar, comment, rating }) => {
  const rate = () => {
    if (rating >= 20000 && rating < 40000) {
      // 1 نجمة صفراء و4 نجمات سوداء
      return (
        <div className="flex">
          {[...Array(1)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-yellow-500" />
          ))}
          {[...Array(4)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-black" />
          ))}
        </div>
      );
    } else if (rating >= 40000 && rating < 60000) {
      return (
        <div className="flex">
          {[...Array(2)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-yellow-500" />
          ))}
          {[...Array(3)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-black" />
          ))}
        </div>
      );
    } else if (rating >= 60000 && rating < 80000) {
      return (
        <div className="flex">
          {[...Array(3)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-yellow-500" />
          ))}
          {[...Array(2)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-black" />
          ))}
        </div>
      );
    } else if (rating >= 80000 && rating < 100000) {
      return (
        <div className="flex">
          {[...Array(4)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-yellow-500" />
          ))}
          <Star className="h-5 w-4 text-black" />
        </div>
      );
    } else if (rating >= 100000) {
      return (
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-5 w-4 text-yellow-500" />
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex">
          <p className="text-red-700 font-bold">Very Pad</p>
        </div>
      );
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
      <p className="text-gray-600 mb-4">{comment}</p>
      <div className="flex items-center">
        <img
          src={avatar ? avatar : "/avatar.png"}
          alt="User Avatar"
          className="w-12 h-12 rounded-full border border-gray-300 mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          {rate()}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
