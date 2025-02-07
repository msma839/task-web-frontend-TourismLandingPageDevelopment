"use client";
import { useState } from "react";
import Card from "./Card";

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
    <div className="text-center p-4 my-5 text-sm md:text-base">
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`cursor-pointer text-gray-600 relative transition-all duration-300 ease-in-out ${
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
