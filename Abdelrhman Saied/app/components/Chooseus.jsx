import React from "react";
import { Medal, CircleDollarSign, Globe } from "lucide-react";
import Link from "next/link";

const Chooseus = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Why <span className="text-orange-500">Choose</span> Us
        </h1>
        <p className="text-gray-600 my-4">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>

        <Link className="btn mt-8 mx-auto block w-fit" href={"/Servecies"}>
          Learn More
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
          <div className="p-4 bg-blue-100 rounded-full mb-4">
            <Medal size={40} className="text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Best Travel Agency</h2>
          <p className="text-gray-600">
            Travel agencies that provide round trip, one way, and multi trip
            services.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
          <div className="p-4 bg-orange-100 rounded-full mb-4">
            <CircleDollarSign size={40} className="text-orange-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Competitive Price</h2>
          <p className="text-gray-600">
            The price offered is affordable starting from the ordinary to the
            exclusive.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
          <div className="p-4 bg-red-100 rounded-full mb-4">
            <Globe size={40} className="text-red-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Global Coverage</h2>
          <p className="text-gray-600">
            There are many tourist attractions, hotels and interesting
            entertainment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
