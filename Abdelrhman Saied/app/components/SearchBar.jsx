import React from "react";
import { Calendar, MapPin, User, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full max-w-5xl mx-auto">
      <div className="flex items-center space-x-2 border border-orange-300 rounded-3xl px-3 py-2 w-full md:w-1/4">
        <MapPin className="text-orange-500" />
        <input
          type="text"
          placeholder="From"
          className="w-full focus:outline-none text-gray-700"
        />
      </div>

      <div className="flex items-center space-x-2 border border-orange-300 rounded-3xl px-3 py-2 w-full md:w-1/4">
        <MapPin className="text-orange-500" />
        <input
          type="text"
          placeholder="To"
          className="w-full focus:outline-none text-gray-700"
        />
      </div>

      <div className="flex items-center space-x-2 border border-orange-300 rounded-3xl px-3 py-2 w-full md:w-1/4">
        <Calendar className="text-orange-500" />
        <input
          type="text"
          placeholder="Dates"
          className="w-full focus:outline-none text-gray-700"
        />
      </div>

      <div className="flex items-center space-x-2 border border-orange-300 rounded-3xl px-3 py-2 w-full md:w-1/4">
        <User className="text-orange-500" />
        <input
          type="text"
          placeholder="Guests"
          className="w-full focus:outline-none text-gray-700"
        />
      </div>

      <button className="bg-orange-500 text-white p-3 rounded-lg shadow hover:bg-orange-600 transition">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
