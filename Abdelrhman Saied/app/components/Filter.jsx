"use client";
import { useState } from "react";
const Filter = ({ setActiveFilter }) => {
  const filters = [
    "All",
    "Special Deals",
    "Populer",
    "Recommendation",
    "Best Price",
  ];
  const [activeFilter, setFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="text-center p-4 my-[20px] text-[13px] md:text-[16px]">
      <div className="flex justify-center space-x-8 px-4">
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`cursor-pointer text-gray-600 relative ${
              activeFilter === filter ? "text-black font-bold" : ""
            }`}
          >
            {filter}
            {activeFilter === filter && (
              <div className="absolute left-0 right-0 h-1 bg-orange-400 rounded-lg mt-1"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
